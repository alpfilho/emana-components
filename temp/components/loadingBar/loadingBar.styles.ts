import styled from 'styled-components';
import { colors } from '@config';
import { motion } from 'framer-motion';

const height = 4;

export const LoadingBarContainer = styled('div')`
	top: 0;
	left: 0;
	right: 0;
	position: absolute;
	width: 100%;
	max-width: 100vw;
	height: 32px;
	overflow-x: hidden;
	pointer-events: none;
	user-select: none;
`;

export const Background = styled(motion.div)`
	position: absolute;
	z-index: 400;
	top: 0;
	left: 0;
	width: 100%;
	height: ${height}px;
	background-color: ${colors.redmokeru};
	box-shadow: 0 4px 15px ${colors.redmokeru};
`;

export const Highlights = styled(motion.div)`
	position: absolute;
	z-index: 400;
	top: 0;
	left: 0;
	width: 32vw;
	height: ${height}px;
	background-image: linear-gradient(
		to right,
		rgba(255, 255, 255, 0) 20%,
		rgba(255, 255, 255, 0.6) 50%,
		rgba(255, 255, 255, 0) 80%
	);
`;
