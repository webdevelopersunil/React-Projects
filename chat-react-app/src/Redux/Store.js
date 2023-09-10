import { configureStore} from "@reduxjs/toolkit";

import { chatreducer } from "./ChatReducer";

const store=configureStore({
    reducer:{
   chat: chatreducer,
    }
})
export default store;