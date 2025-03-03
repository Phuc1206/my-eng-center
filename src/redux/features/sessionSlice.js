'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isAuthenticated: false,
	status: 'loading',
};
const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setSession: (state, action) => {
			state.user = action.payload.user;
			state.isAuthenticated = action.payload.isAuthenticated;
			state.status = action.payload.status;
		},
		clearSession: (state) => {
			state.user = null;
			state.isAuthenticated = false;
			state.status = 'unauthenticated';
		},
	},
});
export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
