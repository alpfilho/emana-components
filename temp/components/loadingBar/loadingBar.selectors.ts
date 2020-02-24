import { createSelector } from '@reduxjs/toolkit';
import { LoadingBarState } from './loadingBar.types';
import { AppState } from '@app.types';

export const getLoadingBar = (state: AppState): object => state.loadingBar;

export const isLoadingBarActive = createSelector(
	getLoadingBar,
	(loadingBar: LoadingBarState) => loadingBar.active
);
