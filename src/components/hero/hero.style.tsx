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
	background-image: ${({ backgroundImage }) => {
		if (backgroundImage) {
			return `url("${backgroundImage}")`;
		}
		return 'none';
	}};

	${Container} {
		height: 100%;
		${Content} {
			height: 100%;
			padding-top: ${({ paddingTop }) => paddingTop || 0}px;
		}
	}
`;
