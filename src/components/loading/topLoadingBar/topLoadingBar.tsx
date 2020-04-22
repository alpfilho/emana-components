import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

import { LoadingBarContainer, Anchor, Background, Highlight } from './topLoadingBar.styles';

export interface TopLoadingBarI {
	color: string;
}

type StateT = 'hidden' | 'loading';

export const TopLoadingBar: React.FC<TopLoadingBarI> = ({ color }) => {
  const [state, setState] = useState<StateT>('hidden');

	const [containerSpring, setContainerSpring] = useSpring(() => ({
		transform: 'translate3d(-4px, 0, 0)'
	}));

	const [bakgroundSpring, setBackgroundSpring] = useSpring(() => ({
		width: '100%'
  }));

  useEffect(() => {
		if (state === 'hidden') {

		}
  }, [state])

	const highlightSpring = useSpring({
		to: async (next: any) => {
			// eslint-disable-next-line no-constant-condition
			while (1) {
				await next({ transform: 'translate3d(116vw, 0, 0)' });
			}
		},
		from: { transform: 'translate3d(-16vw, 0, 0)' },
		delay: 750,
		config: { duration: 2750 },
		reset: true
  });

  return (
		<LoadingBarContainer style={containerSpring}>
			<Anchor>
				<Background style={bakgroundSpring} color={color}>
					<Highlight style={highlightSpring} />
				</Background>
			</Anchor>
		</LoadingBarContainer>
	);
};
