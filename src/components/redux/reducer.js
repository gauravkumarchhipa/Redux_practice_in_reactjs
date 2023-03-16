import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
    {
        coins : [],
        count : 0
    },
    {
        FirstCase : (state, action)=>{
            state.coins = action.payload;
            
        },
        Increment : (state)=>{
            state.count +=1;
            // state.count = state.count + 1;
        },
        Decrement : (state)=>{
            state.count -=1;
            // state.count = state.count - 1;
        }
    }
);