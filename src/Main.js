import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main(){

    const navigate = useNavigate();
    return(
        <>
        <p>Main Page</p>
        <button onClick={()=>navigate('/main')}>Main</button>
        <button onClick={()=>navigate('/credit')}>Credit</button>
        <button onClick={()=>navigate('/login')}>Sign Out</button>

        </>
    )
}