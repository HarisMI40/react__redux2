import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('userr/getUser', 
    () => {
    // try {
    //     const res = await axios("https://jsonplaceholder.typicode.com/todos/1");
    //     return res.data;
    // } catch (error) {
    //     return thunkAPI.rejectWithValue('something went wrong');
    // }
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res)   => res.json())
    .catch((error) => console.log(error))
});


export const userSlice = createSlice({
    name: 'userr',
    initialState: {
        userInfo : {
            name : "siti",
            title : "this title"
        },
        isLoading : false,
        error : false,
    },
    // reducers: {
    //   update: (state, action) => {
    //     state.userInfo.name = action.payload.name;
    //     state.userInfo.title = action.payload.title;
    //   },
    //   remove: state => {
    //     state.name = ""
    //     state.title = ""
    //   }
    // },
    extraReducers : {
        [getUser.pending] : (state) => {
            state.isLoading = true
        },
        [getUser.fulfilled] : (state, action) => {
            console.log("success", action);
            state.isLoading = false
            state.userInfo.name = action.payload.userId
            state.userInfo.title = action.payload.title 
        },
        [getUser.rejected] : (state) => {
            console.log("this is error");
            state.isLoading = false
            state.error = true
        }
    }
  })

  export const {update} = userSlice.actions;