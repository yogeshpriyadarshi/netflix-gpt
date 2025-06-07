import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
name:"movies",
initialState:{
    nowPlay:null,
    trailerPlay:null,
    popularMovies: null,
    topRated: null,
    upComing: null,
},
reducers:{
    addNowPlay: (state,action)=>{
  state.nowPlay= action.payload;
    },
    addTrailerPlay: (state,action)=>{
  state.trailerPlay= action.payload;
},
addPopularMovies: (state,action)=>{
state.popularMovies = action.payload;
},
addTopRated: (state,action)=>{
  state.topRated = action.payload;
},
addUpComing: (state,action)=>{
  state.upComing = action.payload;
}
}});


export const {addNowPlay,addTrailerPlay, addPopularMovies, addTopRated, addUpComing} = moviesSlice.actions;

export default moviesSlice.reducer;