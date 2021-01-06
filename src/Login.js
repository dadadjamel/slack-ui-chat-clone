import React, { Component } from 'react';
import "./login.css"
import { Button } from '@material-ui/core';
import {auth, provider} from "./firebase"
import { useStatevalue } from './StateProvider';
import {actionTypes} from "./reducer"

const Login = () => {
    const [state, dispatch] = useStatevalue()
    const signIn = (e) =>{
        auth.signInWithPopup(provider).then(res=>{
            console.log(res);
            dispatch({
                type : actionTypes.SET_USER,
                user : res.user
            })
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div className="login" >
            <div className="login__container" >
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
                <h1>Sign in to Batta Slack 🦆🦆🦆</h1>
                <p>batta.app.com</p>
                <Button onClick={signIn} variant="contained">
                    Sign in with Google
                </Button>
            </div>

        </div>
    );
}

export default Login;