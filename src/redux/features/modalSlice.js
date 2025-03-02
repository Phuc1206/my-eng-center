'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isRegisterModalOpen: false,
	isLoginModalOpen: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openRegisterModal: (state) => {
			state.isRegisterModalOpen = true;
		},
		closeRegisterModal: (state) => {
			state.isRegisterModalOpen = false;
		},
		openLoginModal: (state) => {
			state.isLoginModalOpen = true;
		},
		closeLoginModal: (state) => {
			state.isLoginModalOpen = false;
		},
	},
});

export const {
	openRegisterModal,
	closeRegisterModal,
	openLoginModal,
	closeLoginModal,
} = modalSlice.actions;

export default modalSlice.reducer;
