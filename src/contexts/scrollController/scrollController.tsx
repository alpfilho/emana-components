import React, { createContext, useRef, useMemo, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollControllerContextI } from './scrollController.types';
import { useViewport } from '@hooks/useViewport';
import { spring, ColdSubscription } from 'popmotion';

/**
 * Default Context
 */
const defaultContext: ScrollControllerContextI = {};

/**
 * Scroll Controller Context
 */
export const ScrollControllerContext = createContext<ScrollControllerContextI>(defaultContext);

export const ScrollControllerProvider: React.FC = ({ children }) => {
	const animationControlRef = useRef<{ scrollYAnimation: ColdSubscription | undefined }>({
		scrollYAnimation: undefined
	});

	const { top } = useViewport();
	const { pathname } = useLocation();

	const stopAnimationOnEvent = useCallback(() => {
		const animationControl = animationControlRef.current;
		animationControl.scrollYAnimation?.stop();
		window.removeEventListener('wheel', stopAnimationOnEvent);
	}, []);

	const contextValue = useMemo<ScrollControllerContextI>(
		() => ({
			scrollTo: (y, animated = true): void => {
				const animationControl = animationControlRef.current;

				if (animated) {
					animationControl.scrollYAnimation = spring({
						from: top?.get() || 0,
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
		}),
		[stopAnimationOnEvent, top]
	);

	/**
	 * Funcionalidade para scrollar para o topo entre navegações
	 */
	useEffect(() => {
		const animationControl = animationControlRef.current;

		if (contextValue.scrollTo && top && top.get() !== 0) {
			contextValue.scrollTo(0, false);
		}
		return (): void => {
			animationControl.scrollYAnimation?.stop();
		};
	}, [pathname, contextValue, top]);

	return (
		<ScrollControllerContext.Provider value={contextValue}>
			{children}
		</ScrollControllerContext.Provider>
	);
};
