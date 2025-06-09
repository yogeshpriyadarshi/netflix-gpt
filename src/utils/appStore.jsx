import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import congfigReducer from "./configSlice"

const appStore = configureStore({
reducer: {
    user: userReducer,
    movies: moviesReducer,
    config: congfigReducer,
}

});

export default appStore;