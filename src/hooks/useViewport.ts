import { useContext } from 'react';
import { ViewportContext } from '@contexts/viewport';
import { ViewportContextStateI } from '@contexts/viewport/viewport.types';

/**
 * Hook para usar o context da viewport
 */
export const useViewport = (): ViewportContextStateI => {
	return useContext(ViewportContext);
};
