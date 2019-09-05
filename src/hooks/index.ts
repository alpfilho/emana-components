import { useContext } from 'react';
import {
	ViewportContext,
	HeaderContext,
	ScrollControllerContext
} from '@contexts';

/**
 * Hook para usar a viewport do contexto
 */
export const useViewportValues = () => {
	return useContext(ViewportContext);
};

/**
 * Hook para ler o tamanho do Header
 */
export const useHeaderValues = () => {
	return useContext(HeaderContext);
};

/**
 * Hook para ter acesso aos controles do Scroll
 */
export const useScrollController = () => {
	return useContext(ScrollControllerContext);
};
