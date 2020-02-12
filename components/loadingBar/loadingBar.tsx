import React from 'react';
import { useSelector } from 'react-redux';
import { isLoadingBarActive } from './loadingBar.selectors';

import {
	LoadingBarContainer,
	Background,
	Highlights
} from './loadingBar.styles';

export const LoadingBar: React.FC = () => {
	const isActive = useSelector(isLoadingBarActive);

	const animateState = isActive ? 'loading' : 'loaded';

	return (
		<LoadingBarContainer>
			<Background
				initial="initial"
				variants={{
					initial: {
						opacity: 0,
						scaleX: 0,
						originX: 0
					},
					loading: {
						opacity: 1,
						scaleX: [0, 0.72],
						originX: 0,
						transition: {
							opacity: {
								duration: 0.25
							},
							scaleX: {
								duration: 1.25
							}
						}
					},
					loaded: {
						opacity: 0,
						scaleX: 1,
						transition: {
							opacity: {
								duration: 0.25,
								delay: 0.75
							},
							scaleX: {
								duration: 0.75
							}
						}
					}
				}}
				animate={animateState}
			/>
			<Highlights
				initial="initial"
				variants={{
					initial: {
						opacity: 0,
						x: '-16vw'
					},
					loading: {
						opacity: 1,
						x: ['-16vw', '116vw'],
						transition: {
							opacity: { type: 'tween', duration: 0.5 },
							x: { loop: Infinity, duration: 1.2 }
						}
					},
					loaded: { opacity: 0, x: '116vw', transition: { duration: 1 } }
				}}
				animate={animateState}
			/>
		</LoadingBarContainer>
	);
};
