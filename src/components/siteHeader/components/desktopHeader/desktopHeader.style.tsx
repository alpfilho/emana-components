import styled from 'styled-components';

import { ContentContainer } from 'components/contentContainer/contentContainer.view';

export const Container = styled.header`
	background: pink;
`;

export const Content = styled(ContentContainer)`
	background: red;
`;

export const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #fff;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.075);
	will-change: opacity;
	z-index: 4;
`;
