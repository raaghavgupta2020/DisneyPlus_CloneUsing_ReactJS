//lets create a slice
import { createSlice } from "@reduxjs/toolkit";

//when the app starts , keep everything empty
const initialState = {
    name:"",
    email:"",
    photo:"",
};

const userSlice = createSlice({
    name:'user',
    initialState,
    //when user logs in , these reducers are gonna remember that stuff
    reducers:{
        setUserLoginDetails : (state , action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        //set everything to null at the time of signout 
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
});

export  const {setUserLoginDetails ,setSignOutState} = userSlice.actions;

export const selectUserName  = (state) => state.user.name;
export const selectUserEmail  = (state) => state.user.email;
export const selectUserPhoto  = (state) => state.user.photo;

//we can access the username , email and the photo with these variables we have created above in any of the other files 

export default userSlice.reducer;