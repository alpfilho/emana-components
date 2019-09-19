import React, { FunctionComponent, useEffect, useRef } from 'react';
import { ScrollControllerContext } from './scrollController.context';
import {
	ScrollControllerContextI,
	ScrollControllerProviderI
} from './scrollController.types';

import { withRouter } from 'react-router-dom';
import { spring } from 'popmotion';
import { useViewportValues } from '@hooks';

const ScrollControllerProviderComponent: FunctionComponent<
	ScrollControllerProviderI
> = ({ children, location: { pathname } }) => {
	const { viewportValues } = useViewportValues();

	const contextValue = useRef<ScrollControllerContextI>({
		scrollTo: (y, animated = true) => {
			if (animated) {
				const animation = spring({
					from: viewportValues.top.get(),
					to: y,
					stiffness: 150,
					damping: 300,
					mass: 2
				}).start((scrollY: number) => {
					window.scrollTo(0, scrollY);
				});

				window.addEventListener('wheel', () => {
					animation.stop();
				});
			} else {
				window.scrollTo(0, y);
			}
		}
	});

	/**
	 * Funcionalidade para scrollar para o topo entre navegações
	 */
	useEffect(() => {
		contextValue.current.scrollTo(0, false);
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
