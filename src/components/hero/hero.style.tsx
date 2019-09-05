import styled from 'styled-components';
import { Content, Container } from '@components/contentContainer';

export const HeroSection = styled.section<{
	paddingTop?: number;
	backgroundImage?: string;
}>`
	height: 100vh;
	width: 100%;
	background-position: center center;
	background-size: cover;
	background-image: url("${({ backgroundImage }) => backgroundImage}");

	${Container} {
		height: 100%;
		${Content} {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding-top: ${({ paddingTop }) => paddingTop || 0}px;
			padding-left: 16%;
			padding-right: 16%;
		}
	}
`;
