 import { createSlice } from "@reduxjs/toolkit";
 import axios from "axios";
 const initialStateValue = []


export const Messageslice = createSlice({
    name: 'message',
    initialState: { value: initialStateValue },
    reducers: {
      messageaction: (state, action) => {
        state.value = action.payload;
      },
      addMessage: (state, action) => {
        state.value.push(action.payload);
      },
    },
})

export const fetchMessages = () => async (dispatch) => {
    try {
      const response = await axios.post('https://chat-backend-ulkc.onrender.com/api/chat/getmsg/');
      const messages = response.data; 
      dispatch(messageaction(messages));
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  
  export const sendMessage = (message) => async (dispatch) => {
    try {
      const response = await axios.post('https://chat-backend-ulkc.onrender.com/api/chat/addmsg/', {
        text: message,
        date: new Date().toISOString(),
      });
      const newMessage = response.data; 
      dispatch(addMessage(newMessage));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

export const Messagereducer = Messageslice.reducer
export const {messageaction}= Messageslice.actions
// export { fetchMessages, sendMessage };
