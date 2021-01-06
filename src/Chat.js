import React, { Component, useState, useEffect } from 'react';
import "./chat.css"
import { useParams } from "react-router-dom"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import db from './firebase';
import Message from './Message';
import Chatinput from './Chatinput';

const Chat = () => {
    const { roomId } = useParams();
    const [roomdetails, setroomdetails] = useState(null)
    const [roommessages, setroommessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setroomdetails(snapshot.data())
            ))
        }

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot=>(
            setroommessages(snapshot.docs.map(doc=>doc.data()))
        ))
    }, [roomId])

    console.log(roomdetails);
    console.log(roommessages);
    return (
        <div className="chat" >
            <div className="chat__header" >
                <div className="chat__headerleft" >
                    <h4 className="chat__channelname" >
                        <strong>#{roomdetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>

                </div>
                <div className="chat__headerright" >
                    <p>
                        <InfoIcon /> Detail
                    </p>

                </div>

            </div>

            <div className="chat__messages" >
                {roommessages.map(roommessage=>(
                    <Message message={roommessage.message} timestamp={roommessage.timestamp} user={roommessage.user} userimage={roommessage.userimage} />
                ))}
            </div>

            <Chatinput channelname={roomdetails?.name} channelid={roomId} />
            

        </div>
    );
}

export default Chat;