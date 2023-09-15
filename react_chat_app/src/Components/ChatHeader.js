import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
//this component shows thw profile and chatlog when we click on user a
export default function ChatHeader() {

const data=useSelector((state)=>(state.chat[1]));

  return (
    <div className='head'>
       
        
        
       {data && <>
       <span className='radius'>
       <img src={data.picture} />
       </span>
      <span>{data.name}</span>
      
       </>
       
       }
        
           
    </div>
  )
}
