import styled from 'styled-components';

export const SitePageMain = styled.main<{ paddingTop: number; background: string }>`
	position: relative;
	z-index: 0;
	width: 100%;
	height: auto;
	background: ${({ background }) => background || 'none'};
	padding-top: ${({ paddingTop }) => paddingTop}px;
`;
