import React, { useContext, useEffect } from 'react';
import { useSpring } from 'react-spring';

import { LoadingContext } from '@contexts/loadingContext';

import { LoadingBarContainer, Anchor, Background } from './topLoadingBar.styles';

export interface TopLoadingBarI {
	color: string;
}

export const TopLoadingBar: React.FC<TopLoadingBarI> = ({ color }) => {
	const { isLoading } = useContext(LoadingContext);

	const [containerSpring, animateContainer] = useSpring(
		{
			y: '-100%',
			config: {
				tension: 600,
				friction: 80
			}
		},
		[]
	);

	const [backgroundSpring, animateBackground] = useSpring(
		{
			width: '0%',
			config: {
				duration: 2750,
				ease: 'linear'
			}
		},
		[]
	);

	useEffect(() => {
		if (isLoading === true) {
			animateContainer({ y: '0%' });
			animateBackground({
				to: { width: '75%' },
				from: { width: '0%' }
			});
		} else {
			animateContainer({ y: '-100%' });
			animateBackground({ width: '100%' });
		}
	}, [animateContainer, animateBackground, isLoading]);

	return (
		<LoadingBarContainer style={containerSpring}>
			<Anchor>
				<Background style={backgroundSpring} color={color} />
			</Anchor>
		</LoadingBarContainer>
	);
};
