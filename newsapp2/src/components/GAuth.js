import React from 'react'
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";


function GAuth() {
    const [user,setUser]=useState({})

    const handleCallbackResponse =(response)=>{
        console.log("Encoded gwt id tokens "+response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject);
        document.getElementById('singniInDiv').hidden = true;
    }
    

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id : process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback : handleCallbackResponse

    });
        google.accounts.id.renderButton(
            document.getElementById('singniInDiv'),
            {theme : 'outline', size: 'large' , width: '20'}
        )
    
        //google.accounts.id.prompt();
    
    },[])

    const handleSingnOut=(e)=>{
        setUser({});
        document.getElementById('singniInDiv').hidden =false;

    }

  return (
    
    <div className='App'>
        
        <div id ="singniInDiv" className='container'></div>
        {
            Object.keys(user).length!==0 &&
            <button onClick={(e)=>{handleSingnOut(e)}}>SignOut</button>
        }
        
    </div>
  )
}

export default GAuth
