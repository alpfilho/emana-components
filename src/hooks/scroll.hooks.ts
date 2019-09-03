import { useContext } from 'react';
import { ViewportContext } from '@contexts';

/**
 * Hook para usar a viewport do contexto
 */
export const useViewportValues = () => {
	return useContext(ViewportContext);
};
