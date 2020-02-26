import styled from 'styled-components';

export const SitePageMain = styled.main<{
	paddingTop?: number;
	marginTop?: number;
	headerHeight?: number;
}>`
	position: relative;
	z-index: 0;
	width: 100%;
	height: auto;
	padding-top: ${({ paddingTop }): number => paddingTop || 0}px;
	margin-top: ${({ marginTop }): number => marginTop || 0}px;
	min-height: calc(
		100vh - ${({ headerHeight }): number => headerHeight || 0}px
	);
`;
