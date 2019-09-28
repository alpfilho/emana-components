import styled from 'styled-components';
import { Container, Content } from '@components';

export const MobileHeader = styled('header')<{
	fixed?: boolean;
}>`
	position: ${({ fixed }) => {
		if (fixed === true) {
			return 'fixed';
		}
		return 'relative';
	}};
`;

export const MhAnchor = styled('div')<{
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
