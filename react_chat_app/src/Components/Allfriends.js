import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Showdata } from '../Redux/ChatReducer';


//This component shows all freinds list 
export default function Allfriends(props) {
const data=useSelector((state)=>(state.chat[0]));
const dispatch=useDispatch();
console.log("allchat",data);
function handleId(item)
{
    dispatch(Showdata({
        name:item.name,
        Id:item.id,
        picture:item.picture

    }))
    props.setadd(false);
    

}

  return (

    <div>
        <div className="container ">
<div className="row clearfix">
    <div className="col-lg-12">
        <div className="card chat-app">
            <div id="plist" className="people-list left">
                <div className="input-group">
                    </div>
                    <ul className="list-unstyled chat-list mt-2 mb-0">
                {data?data.allFriends.map((item,index)=>(

               
                    <li className="clearfix" key={item.id}  onClick={()=>handleId(item)}>
                        <img src={item.picture} alt="avatar"/>
                        
                        <div className="about">
                            <div className="name" >{item.name}
                            
                         
                       {/* {Array.isArray(item['chatlog']) && item['chatlog'].length > 0 && item['chatlog'][item['chatlog'].length - 1]['timestamp'] && item['chatlog'][item['chatlog'].length - 1]['timestamp']} */}
                    <span style={{marginLeft:10}}> {
                        item.chatlog &&item.chatlog[item.chatlog.length-1] && item.chatlog[item.chatlog.length-1].timestamp && item.chatlog[item.chatlog.length-1].timestamp
                       }</span> 
                          
                         
                            </div>
                            
                            <div className="status"> <i className="fa fa-circle offline"></i> </div>                                            
                        </div>
                    </li>
                    )):""}
                    </ul>

                    </div>
                  </div>
                  </div>
                  </div>
                  </div>
    </div>
  )
}
