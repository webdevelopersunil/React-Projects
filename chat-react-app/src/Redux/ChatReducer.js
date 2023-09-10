import { createSlice } from "@reduxjs/toolkit";

const initialState={

}

const Chatslice=createSlice({
    name:'chat',
    initialState,
    reducers:{
        // use to add database 
        add:(state,action)=>{
return{
    ...state,
    0:action.payload,
}

    },
    //use when you cllicks on freinds and want to chat
    Showdata:(state,action)=>{
        

        return{
            ...state,
            1:action.payload
        }
    },
    // use when user send message to freinds
    
    addchat:(state,action)=>{
        let newstate=state;
        
     let tempID=state[1].Id;
     let newfriends=newstate[0].friends;
     console.log("new freinds",(newfriends));
     for(let i=0;i<newfriends.length;i++)
     {
        if(newfriends[i].id==tempID)
        {
            newfriends[i].chatlog.push(action.payload);
        }
     }

    }

    }
 

})

 export const {add,Showdata,addchat}=Chatslice.actions;
//  export const chatselector=(state)=>state.chat[0];
 export const chatreducer=Chatslice.reducer;