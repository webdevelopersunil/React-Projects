import React, { useState } from 'react'
import Data from "../Database/Data"
import Sendmessage from './Sendmessage'
import './Rightbar.css'
import { Selector, useDispatch, useSelector } from 'react-redux'
import ChatHeader from './ChatHeader'
import { addchat } from '../Redux/ChatReducer'
import Recievemessage from './Recievemessage'
// this compoenet shows the message of the freinds 
export default function Rightsiderbar() {
  const chatdata=useSelector((state)=>(state.chat));
  const dispatch=useDispatch();
  const[inputtext,setInputtext]=useState("");
 function messagehandle()
 {
  if(inputtext!="")
  {  
    dispatch(addchat(  {text:inputtext,
      "timestamp":Date(Date.now).slice(16,21),}
      ));
      setInputtext("");
}
  


  
 }
 console.log("render")
  return (
   <>
   <ChatHeader/>
   
   

   <div className='Right'>

      {chatdata[0] && chatdata[1] ? chatdata[0].friends.map((item, index) => {


        if (chatdata[1].Id == item.id) {
          console.log(chatdata[1])
          return (
            <div key={index}>
              {item.chatlog.map((chatlog, index) => {
                return (
                  <div>

                    <Sendmessage chats={chatlog} key={index} />
                    <br/>
                    <br/>
                    <Recievemessage chats={chatlog} key={index}/>
                  </div>
                )
              })}

            </div>
          )

        }
      })
        :
        <div className='heading' style={{width:300}}>
          Welcome to the Chat App
        </div>}





    </div>
    {/* button when you start chat */}
    <div className='chatbox'>
    <input type='text' placeholder='Type Message Here' value={inputtext} onChange={(e)=>setInputtext(e.target.value)}/>
    <img src="https://png.pngtree.com/element_our/sm/20180620/sm_5b29c1e7b8dd3.jpg" onClick={messagehandle}/>

    </div>
    </>
  )
}
