import styled from 'styled-components';

export const SitePageMain = styled.main<{ paddingTop?: number }>`
	position: relative;
	z-index: 0;
	width: 100%;
	height: auto;
	padding-top: ${({ paddingTop }) => paddingTop}px;
`;
