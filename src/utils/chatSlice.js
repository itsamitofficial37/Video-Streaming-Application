import { createSlice } from "@reduxjs/toolkit";
import { live_Chat_Count } from "../constant";

const  chatSlice = createSlice({
    name : "chat",
    initialState : {
        messages : [],
    },
    reducers : {
        addMessage : (state , action ) => {
            state.messages.splice(live_Chat_Count,1)
            state.messages.unshift(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;