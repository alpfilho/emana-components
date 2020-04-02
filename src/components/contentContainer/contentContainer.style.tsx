import styled from 'styled-components';
import { screenSizes } from '@utils/viewport.utils';
import { mediaQuery } from '@utils/style.utils';

/**
 * Centraliza o conteúdo
 */
export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
  align-items: center;
`;

/**
 * Sempre mantem uma margem em relacão ás bordas da tela
 * o padrão é 92px em cada lado e 32px no mobile
 * Expande até o máximo de uma tela fullhd (1920px)
 */
export const Content = styled.div`
	position: relative;
	width: calc(100% - (92px * 2));
	max-width: ${screenSizes.fullhd}px;

	${mediaQuery.screen.maxWidth(screenSizes.md)} {
		width: calc(100% - (32px * 2));
	}
`;
