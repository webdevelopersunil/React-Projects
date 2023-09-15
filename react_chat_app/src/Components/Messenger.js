import React, { useEffect } from 'react'
import Leftsidebar  from './Leftsidebar'
import Rightsiderbar from './Rightsiderbar'
import './Messenger.css'
import Searchbar from './Searchbar'
import { useDispatch, useSelector } from 'react-redux';
import {chatselector} from "../Redux/ChatReducer";
import { add } from '../Redux/ChatReducer'
import Data from '../Database/Data'


export default function Messenger() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(add(Data))

  },[])

  const data=useSelector((state)=>state.chat[0]);
  console.log("data",data);
  // console.log(data);
  return (
    <div className='Appflex'>
      {/* *****************leftside */}
        <Leftsidebar data1={data}/>
        {/* rightside */}
        <Rightsiderbar/>

    </div>
  )
}
