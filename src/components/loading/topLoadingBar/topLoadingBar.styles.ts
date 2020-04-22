import styled from 'styled-components';
import { animated } from 'react-spring';

export const LoadingBarContainer = styled(animated.div)`
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	overflow: visible;
`;

export const Anchor = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Background = styled(animated.div)<{ color: string }>`
	width: 100%;
	height: 4px;
	background-color: ${({ color }): string => color};
	overflow: hidden;
`;

export const Highlight = styled(animated.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 16vw;
	height: 4px;
	background-image: linear-gradient(
		to right,
		rgba(255, 255, 255, 0) 20%,
		rgba(255, 255, 255, 0.6) 50%,
		rgba(255, 255, 255, 0) 80%
	);
`;
