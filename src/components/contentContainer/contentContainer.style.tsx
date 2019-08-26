import styled from 'styled-components';
import { screenSizes } from '../../variables';
import { mediaQuery } from '../../utils/style.utils';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	position: relative;
	width: calc(100% - (96px * 2));
	max-width: ${screenSizes.fullhd}px;

	${mediaQuery.screen.maxWidth(screenSizes.sm)} {
		width: calc(100% - (32px * 2));
	}
`;
