import styled from 'styled-components';

export const HeroSection = styled.section<{
	avoidHeader?: boolean;
	headerHeight?: number;
}>`
	height: ${({ avoidHeader, headerHeight }): string => {
		if (avoidHeader && headerHeight) {
			return `calc(100vh - ${headerHeight}px)`;
		}
		return '100vh';
	}};
	width: 100%;
`;
