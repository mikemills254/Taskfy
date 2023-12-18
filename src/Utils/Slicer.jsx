import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.user = null
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const { login, logout, setIsAuthenticated } = authSlice.actions;
export const selectAuth =  (state) => state.auth;
export default authSlice.reducer