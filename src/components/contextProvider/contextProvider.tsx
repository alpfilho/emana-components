import React from 'react';
import { ViewportContextProvider } from '@contexts/viewport';
import { ElementsRectContextProvider } from '@hooks/useElementRect';

/**
 * Componente responável por implementar todos os contextos padrão
 * para projetos Emana. Colocá-lo sempre como filho de um <Router>
 * @param children
 * @constructor
 */
export const ContextProvider: React.FC = ({ children }) => {
	return (
		<ViewportContextProvider>
			<ElementsRectContextProvider>{children}</ElementsRectContextProvider>
		</ViewportContextProvider>
	);
};
