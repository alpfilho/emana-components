import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SitePage } from '@components/sitePage';
import { loadingBarSlice } from '@components/loadingBar';

const { actions: loadingBarActions } = loadingBarSlice;

export const LoadingFallback: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		/* Começa o loading */
		dispatch(loadingBarActions.enableLoadingBar());
		return (): void => {
			/* Finaliza o loading */
			dispatch(loadingBarActions.disableLoadingBar());
		};
	}, [dispatch]);

	return <SitePage />;
};
