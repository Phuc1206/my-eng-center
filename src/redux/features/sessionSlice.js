'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isAuthenticated: false,
};
const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setSession: (state, action) => {
			(state.user = action.payload), (state.isAuthenticated = !action.payload);
		},
		clearSession: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		},
	},
});
export default sessionSlice;
