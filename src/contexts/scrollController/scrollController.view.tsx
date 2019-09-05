import React, { FunctionComponent, useEffect, useRef } from 'react';
import { ScrollControllerContext } from './scrollController.context';
import {
	ScrollControllerContextI,
	ScrollControllerProviderI
} from './scrollController.types';

import { viewportElement } from '@contexts/viewport/viewport.view';

import { withRouter } from 'react-router-dom';

const ScrollControllerProviderComponent: FunctionComponent<
	ScrollControllerProviderI
> = ({ children, location: { pathname } }) => {
	const contextValue = useRef<ScrollControllerContextI>({
		scrollTo: (y) => {
			viewportElement.scrollTo(0, y);
		}
	});

	/**
	 * Funcionalidade para scrollar para o topo entre navegações
	 */
	useEffect(() => {
		contextValue.current.scrollTo(0);
	}, [pathname]);

	return (
		<ScrollControllerContext.Provider value={contextValue.current}>
			{children}
		</ScrollControllerContext.Provider>
	);
};

export const ScrollControllerProvider = withRouter(
	ScrollControllerProviderComponent
);
