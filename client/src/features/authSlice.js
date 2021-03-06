import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../Services/authService'
// TODO: learn about createAsyncThunk

const user = JSON.parse(localStorage.getItem('user'))
const admin = localStorage.getItem('isAdmin')
const initialState = {
    user: user ? user : null,
    isSuccess: false,
    isLoading: false,
    isAdmin: admin === "true" ? true : false,

}

//register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {

    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data &&
            error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//login user
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    const { email, password } = data;
    const { staySignin } = data;
    const user = { email, password }


    try {

        return await authService.login(user, staySignin)
    } catch (error) {
        const message = (error.response && error.response.data &&
            error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// logout
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout()
})
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isAdmin = false
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true

                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false

                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.isAdmin = false

            })
    }
})
export const { reset } = authSlice.actions
export default authSlice.reducer