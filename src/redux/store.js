'use client';
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modalSlice';
import sessionReducer from './features/sessionSlice';
export const store = configureStore({
	reducer: {
		modal: modalReducer,
		session: sessionReducer,
	},
});
