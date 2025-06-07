import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
name:"movies",
initialState:{
    nowPlay:null,
    trailerPlay:null,
},
reducers:{
    addNowPlay: (state,action)=>{
  state.nowPlay= action.payload;
    },
    addTrailerPlay: (state,action)=>{
  state.trailerPlay= action.payload;
}
}});


export const {addNowPlay,addTrailerPlay} = moviesSlice.actions;

export default moviesSlice.reducer;