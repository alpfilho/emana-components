import { createSlice } from '@reduxjs/toolkit';
import { LoadingBarState } from './loadingBar.types';

const initialState: LoadingBarState = {
	active: false
};

export const loadingBarSlice = createSlice({
	name: 'topLoadingBar',
	initialState,
	reducers: {
		enableLoadingBar: (state: LoadingBarState): void => {
			state.active = true;
		},
		disableLoadingBar: (state: LoadingBarState): void => {
			state.active = false;
		}
	}
});
