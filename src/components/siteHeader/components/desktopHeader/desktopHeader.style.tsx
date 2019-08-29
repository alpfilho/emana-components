import styled from 'styled-components';
import posed from 'react-pose';

import { ContentContainer } from 'components/contentContainer/contentContainer.view';

const Header = posed.header({
	default: {
		/* Esse transform está vindo da prop (veja a documentação) */
	},
	fixed: {}
});

export const Container = styled(Header)`
	position: ${({ fixed }) => {
		if (fixed) {
			return 'fixed';
		}
		return 'relative';
	}};
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 4;
	height: auto;
	will-change: transform;
`;

export const Content = styled(ContentContainer)`
	background: red;
`;

export const LogoContainer = styled.div`
	width: 300px;
	height: auto;
	position: relative;
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
