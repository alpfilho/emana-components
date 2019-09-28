import styled from 'styled-components';
import { Content, Container } from '@components/contentContainer';

export const DesktopHeader = styled('header')<{
	fixed: boolean;
}>`
	position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
	width: 100%;
	height: auto;
	z-index: 100;
`;

export const DkAnchor = styled('div')<{
	addStyles?: {
		anchor: any;
		container: any;
		content: any;
	};
}>`
	position: relative;
	width: 100%;
	height: 100%;

	${Container} {
		position: relative;
		z-index: 110;
		height: 100%;
		will-change: opacity, transform, color, background;

		${Content} {
			will-change: opacity, transform, color, background;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding-top: 32px;
			padding-bottom: 32px;
		}
	}
	
	${({ addStyles }) => addStyles && addStyles.anchor ? addStyles.anchor: }
`;

export const DkBackground = styled.div<{ additionalStyles?: any }>`
	will-change: opacity, transform, color, background;
	position: absolute;
	z-index: 100;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: #fff;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);

	${({ additionalStyles }) => additionalStyles}
`;
