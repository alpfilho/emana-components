import styled from 'styled-components';
import { Content, Container } from '@components/contentContainer';

export const DkHeader = styled.header<{ fixed?: boolean }>`
	position: ${({ fixed }) => {
		if (fixed === true) {
			return 'fixed';
		}
		return 'relative';
	}};

	width: 100%;
	height: auto;
	padding: 32px 0;
`;

export const DkAnchor = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	${Container} {
		height: 100%;
		${Content} {
			background-color: blue;
			height: 100%;
		}
	}
`;

export const DkBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: red;
`;
