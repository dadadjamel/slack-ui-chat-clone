import "./SidebarOption.css"
import React, { Component } from 'react';
import {useHistory} from "react-router-dom"
import db from "./firebase"

const SidebarOption = ({ Icon, title, id, addchanneloption }) => {
    const history = useHistory()

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        }else{
            history.push(title)
        }
    }

    const addchannel = () => {
        const channelname = prompt('Please enter the channel name')
        if(channelname){
            db.collection('rooms').add({
                name:channelname
            })
        }
    }


    return (
        <div className="sidebaroption" onClick={addchanneloption ? addchannel : selectChannel} >
            {Icon && <Icon className="sidebaroption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                    <h3 className="sidebaroption__channel" >
                        <span className="sidebaroption__hash" >#</span> {title}
                    </h3>
                )}
        </div>
    );
}

export default SidebarOption;