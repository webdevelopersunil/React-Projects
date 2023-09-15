import React from 'react'
// seach bar component
export default function Searchbar(props) 
{

  return (
    <div className="search ">
        <br/>
        <br/>
<br/>
<input type="text" placeholder="🔍Search or Start New Chat" onChange={(e)=>props.Setsearchinput(e.target.value)}/>
   
    </div>
  )
}