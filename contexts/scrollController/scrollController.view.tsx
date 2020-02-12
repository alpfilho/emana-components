import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { spring } from 'popmotion';

import { ScrollControllerContext } from './scrollController.context';

import {
	ScrollControllerContextI,
	ScrollControllerProviderI
} from './scrollController.types';

import { useViewportValues } from '@hooks';

export const ScrollControllerProvider: React.FC<ScrollControllerProviderI> = ({
	children
}) => {
	const { pathname } = useLocation();

	const { viewportValues } = useViewportValues();

	const contextValue = useRef<ScrollControllerContextI>({
		scrollTo: (y, animated = true) => {
			if (animated) {
				const stopAnimationOnEvent = () => {
					animation.stop();
					window.removeEventListener('wheel', stopAnimationOnEvent);
				};

				const animation = spring({
					from: viewportValues.top.get(),
					to: y,
					stiffness: 150,
					damping: 400,
					mass: 2
				}).start({
					update: (scrollY: number) => {
						window.scrollTo(0, scrollY);
					},
					complete: () => {
						window.removeEventListener('wheel', stopAnimationOnEvent);
					}
				});

				window.addEventListener('wheel', stopAnimationOnEvent);
			} else {
				window.scrollTo(0, y);
			}
		}
	});

	/**
	 * Funcionalidade para scrollar para o topo entre navegações
	 */
	useEffect(() => {
		if (viewportValues.top.get() !== 0) {
			contextValue.current.scrollTo(0, false);
		}
	}, [pathname]);

	return (
		<ScrollControllerContext.Provider value={contextValue.current}>
			{children}
		</ScrollControllerContext.Provider>
	);
};
