import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
            state.isAuthenticated = !!action.payload;
        },
    },
});

export const { setIsAuthenticated, setAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
