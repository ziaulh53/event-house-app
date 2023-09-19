import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:"",
  user: {},
  isAuthenticated:false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStore: (state, action)=>{
      const {user,token}=action?.payload;
      state.isAuthenticated=true,
      state.token=token,
      state.user=user,
      window.location.reload(); //What's means by this 
    },
    logoutStore: (state)=>{
      state.isAuthenticated=false,
      state.token="",
      state.user={}
    },
  },
});

export const {loginStore, logoutStore} = authSlice.actions;

export default authSlice;

