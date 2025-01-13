
import { createSlice } from "@reduxjs/toolkit"; 

const getUserFromLocalStorage = () => {
    let user = localStorage.getItem('user');
    if(!user)
    {
        return null;
    }
    const actualUser=JSON.parse(user);
    return {actualUser}; 
}

let initialState=getUserFromLocalStorage();


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        saveUser:(state,action)=>{
            let user=JSON.stringify(action.payload);
            localStorage.setItem('user', user);
        },
        removeUser:(state, action)=>{
            localStorage.removeItem('user');
            state.actualUser=null;
        }
    }
})

export const {saveUser, removeUser} = userSlice.actions;

export default userSlice.reducer;