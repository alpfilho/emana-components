import styled from 'styled-components';
import { animated } from 'react-spring';

export const LoadingBarContainer = styled(animated.div)`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;
	bottom: auto;
	width: 100%;
	overflow: visible;
`;

export const Anchor = styled.div`
	position: relative;
	width: 100%;
`;

export const Background = styled(animated.div)<{ color: string }>`
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
