import React, { Component, useState } from 'react';
import "./chatinput.css"
import { Button } from '@material-ui/core';
import { useStatevalue } from './StateProvider';
import firebase from "firebase"
import db from "./firebase"

const Chatinput = ({ channelname, channelid }) => {
    const [input, setinput] = useState('')
    const [{ user }] = useStatevalue()


    const sendmessage = (e) => {
        e.preventDefault()
        if (channelid) {
            db.collection('rooms').doc(channelid).collection('messages').add({
                message:input,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                user : user.displayName,
                userimage : user.photoURL
            })
        }
        setinput('')
    }
    return (
        <div className="chatinput" >
            <form>
                <input value={input} onChange={(e) => setinput(e.target.value)} placeholder={`Message #${channelname}`} />
                <Button type="submit" onClick={sendmessage} >SEND</Button>
            </form>

        </div>
    );
}

export default Chatinput;