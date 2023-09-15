import React from 'react'

export default function Recievemessage(props) {
  return (
    <div class="height rightalign" style={{borderRadius:5}}>
    {props.chats.text}
  
    <span style={{color:'darkslateblue'}}>  {props.chats.timestamp}</span>
  
    <br/>
    <br/>
    
</div>
  )
}
