import styled from 'styled-components';

export const LogoContainer = styled.div<{
	logoWidth?: number;
	logoAspectRatio?: number;
}>`
	/* A largura da logo vem da Prop */
	width: ${({ logoWidth }) => {
		if (logoWidth) {
			return logoWidth;
		}
		return 300;
	}}px;

	/* Calculamos a altura sempre usando o Aspect Ratio e Width */
	height: ${({ logoWidth, logoAspectRatio }) => {
		if (logoWidth && logoAspectRatio) {
			return logoWidth / logoAspectRatio;
		}
		return 100;
	}}px;

	position: relative;
	z-index: 120;
`;

export const LogoInsideContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	will-change: opacity, transform, color, background;
`;
