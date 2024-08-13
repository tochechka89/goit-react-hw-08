import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}


export const register = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('users/signup', newUser);
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error with registration!')
    }
});


export const logIn = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('users/login', userData);
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error with log in!')
    }
});


export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        const response = await axios.post('users/logout');
        setToken('');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error with log out!')
    }
});


export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);

    try {
        const response = await axios.get('users/current');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error!')
    }

},
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            return state.auth.token !== null;
        },
    }
)