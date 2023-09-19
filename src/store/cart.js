import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    items:[]
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartStore:(state, action)=>{},
        deleteCartStore:(state, action)=>{}
    }
})

export const {addCartStore, deleteCartStore} = cartSlice.actions;
export default cartSlice;