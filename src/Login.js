import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();

    return(
        <>
        <input placeholder='ID'></input>
        <input placeholder='password'></input>
        <button onClick={()=>navigate('/main')}>Sign In</button>
        </>
    )
}