import styled from 'styled-components';
import { Content, Container } from '@components/contentContainer';

export const DesktopHeader = styled.header<{
	fixed?: boolean;
}>`
	position: ${({ fixed }) => {
		if (fixed === true) {
			return 'fixed';
		}
		return 'relative';
	}};

	width: 100%;
	height: auto;
	z-index: 100;
`;

export const DkAnchor = styled.div<{
	paddingTop?: number;
	paddingBottom?: number;
}>`
	position: relative;
	width: 100%;
	height: 100%;
	padding-top: ${({ paddingTop }) => paddingTop || 32}px;
	padding-bottom: ${({ paddingBottom }) => paddingBottom || 32}px;

	${Container} {
		position: relative;
		z-index: 110;
		height: 100%;
		will-change: opacity, transform, color, background;

		${Content} {
			height: 100%;
			will-change: opacity, transform, color, background;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
`;

export const DkBackground = styled.div<{ backgroundColor?: string }>`
	position: absolute;
	z-index: 100;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	will-change: opacity, transform, color, background;
	background-color: ${({ backgroundColor }) => backgroundColor || 'none'};
`;
