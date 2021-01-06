import React, { Component } from 'react';
import './message.css'

const Message = ({ message, timestamp, user, userimage }) => {
    return (
        <div className="message" >
            <img src={userimage} alt="userImage" />
            <div className="message__info" >
                <h4>
                    {user} <span className="message__timestamp" > {new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>

        </div>
    );
}

export default Message;