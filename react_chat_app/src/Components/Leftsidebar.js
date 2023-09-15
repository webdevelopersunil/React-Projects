import React, { useState } from 'react'
import Searchbar from './Searchbar'
import './Leftbar.css';
import Data from "../Database/Data";
import { Dispatch, useDispatch, useSelector } from 'react-redux';
import { Showdata } from '../Redux/ChatReducer';
import Allfriends from './Allfriends';

//this compoenent shows those user which we have interacted
export default function Leftsidebar({data1}) {
    const [searchinput,Setsearchinput]=useState("");
    const [add,setadd]=useState(false);
  

const dispatch=useDispatch();
const data=useSelector((state)=>(state.chat[1]));
function showallcontact()
{
 if(add)
 {
  setadd(false);
 }
 else
 {
  setadd(true);
 }

}
function getId(item)
{
    

dispatch(Showdata({
    Id:item.id,
    name:item.name,
    picture:item.picture}))
 
   

}

  return (

    
    <div className='Left over '>
      <div className='imagechat'>
        <img src="https://i.pinimg.com/originals/09/e2/cd/09e2cd8d3a83b6e9cd4dc5d0d703a575.png"/>
      </div>
      <div className='allcontact' onClick={showallcontact}>
        <img src="data:image/png;base64,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"/>

      </div>
  {/* ***************serchbar */}

 <Searchbar Setsearchinput={Setsearchinput}/>
 <hr style={{borderColor:'black'}} ></hr>
 

<div >


{/* *****************Show all freinds/ */}
{add?<Allfriends setadd={setadd}/>:(

<div className="container ">
<div className="row clearfix">
    <div className="col-lg-12">
        <div className="card chat-app">
            <div id="plist" className="people-list left">
                <div className="input-group">
                    </div>
                    <ul className="list-unstyled chat-list mt-2 mb-0">
                {data1?data1.friends
                .filter((srch)=>{
                  if(searchinput=='')
                  {
                    return srch;
                  }
                  else if(srch.name.toLowerCase().includes(searchinput.toLowerCase()))
                  {
return srch;
                  }
                
                  

                })
                
                
                
                .map((item,index)=>{
                  if(item.chatlog.length>0)
                  {
               return(
                    <li className="clearfix" key={item.id} onClick={()=>getId(item)} >
                        <img src={item.picture} alt="avatar"/>
                        
                        <div className="about">
                            <div className="name" >{item.name}
                            
                         
                          <span style={{marginLeft:10}}> {
                        item.chatlog &&item.chatlog[item.chatlog.length-1] && item.chatlog[item.chatlog.length-1].timestamp && item.chatlog[item.chatlog.length-1].timestamp
                       }</span>
                          
                         
                            </div>
                            
                            <div className="status"> <i className="fa fa-circle offline"></i> </div>                                            
                        </div>
                    </li>
               )
                      }
                }):""}
                    </ul>

                    </div>
                  </div>
                  </div>
                  </div>
                  </div>)}



 </div>

    </div>

  



  )
}
