import {configureStore , getDefaultMiddleware} from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"
import movieReducer from "../features/movie/movieSlice"
//we are setting up the redux store
export default configureStore({
    //we need to add the reducer that we created 
    reducer :{
        user : userReducer,
        movie : movieReducer,
    },
    middleware : getDefaultMiddleware({
        serializableCheck: false,
    }),
});