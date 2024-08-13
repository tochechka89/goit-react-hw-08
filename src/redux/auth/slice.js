import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null,
    },
    
    extraReducers: builder => 
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
        }).addCase(register.rejected, (state) => {
            state.error = true;
        }).addCase(logIn.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
        }).addCase(logIn.rejected, (state) => {
            state.error = true;
        }).addCase(logOut.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(logOut.fulfilled, (state) => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
            state.loading = false;
        }).addCase(logOut.rejected, (state) => {
            state.error = true;
        }).addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
            state.loading = true;
            state.error = false;
        }).addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        }).addCase(refreshUser.rejected, (state) => {
            state.error = true;
            state.isRefreshing = false;
        })
});

export const authReducer = authSlice.reducer;