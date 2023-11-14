import { createSlice } from "@reduxjs/toolkit";

const bankSlice=createSlice({
    name:'bank',
    initialState:{money:7000},
    reducers:{
        rutTien:(state,action)=>{state.money-=action.payload},
        nhanTien:(state,action)=>{state.money+=action.payload}, 
    }
})
export const {rutTien, nhanTien}=bankSlice.actions
export default bankSlice.reducer