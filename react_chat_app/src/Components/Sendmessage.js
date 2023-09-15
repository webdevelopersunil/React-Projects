import React from 'react'

export default function Sendmessage(props) {
  console.log("props",props);
    
  return (
    <div class="height marginleft" style={{borderRadius:5}}>
        {props.chats.text}
      
        <span style={{color:'darkslateblue'}}>  {props.chats.timestamp}</span>
      
        <br/>
        <br/>
        
    </div>
  )
}
