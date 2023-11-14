import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankSlice";
import todoReducer from "./todoSlice";

export const store=configureStore({
    reducer:{
        bankReducer,  
        todoReducer     
    }
})