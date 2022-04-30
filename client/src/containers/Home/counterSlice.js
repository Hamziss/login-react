import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: localStorage.getItem("token"),
    email: null,
    name: null,
    _id: null,
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setemail: (state, { payload }) => {
            token: payload.token
            state.value = payload.email.value
        },
        sign_out: (state, { payload }) => {
            state.value = null
        },

    },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer