import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LogoInsideContainer = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 101;
	will-change: opacity, transform;
`;
