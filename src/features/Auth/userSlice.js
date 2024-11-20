import { Settings } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import userApi from 'api/userApi';


export const register  = createAsyncThunk(
    'user/register',
    async (payload) => {

        const data = await userApi.register(payload)
        // call Api to register

        //save data to local storage
        localStorage.setItem('access_token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))


        //return user data

        return data.user
    }
)



const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {}, //thông tin của login user
        Settings: {},

    },
    reducers: {
        extraReducers: {
            [register.fulfilled]: (state, action) => {
                state.current = action.payload //cập nhật redux state
            }
        }
    }
})

const { reducer } = userSlice
export default reducer