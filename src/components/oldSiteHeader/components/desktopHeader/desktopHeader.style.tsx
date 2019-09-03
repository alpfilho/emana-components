import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
	Container as CcContainer,
	Content as CcContent
} from 'components/contentContainer/contentContainer.style';

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: auto;
	padding-top: 32px;
	padding-bottom: 16px;
	z-index: 100;
`;

export const ContentContainer = styled(CcContainer)`
	height: 100%;
	position: relative;
`;

export const Content = styled(CcContent)`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	will-change: transform, opacity;
	position: relative;
	z-index: 110;
`;

export const LogoContainer = styled.div<{
	logoWidth: number;
	logoAspectRatio: number;
}>`
	width: ${(props) => props.logoWidth}px;
	height: ${(props) => props.logoWidth / props.logoAspectRatio}px;
	position: relative;
	z-index: 120;
`;

export const Nav = styled.nav`
	width: auto;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	position: relative;
	z-index: 110;
`;

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background-color: #fff;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.075);

	will-change: transform, opacity;
	position: absolute;
	z-index: 100;
`;
