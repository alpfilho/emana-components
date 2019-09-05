import React from 'react';

import { HeaderContextProvider, ViewportContextProvider } from '@contexts';
import { ScrollControllerProvider } from '@contexts/scrollController/scrollController.view';

/**
 * Componente que é responável por Implementar todos os contextos
 * padrão para projetos Emana. Colocá-lo sempre como filho de um <Router>
 * @param children
 * @constructor
 */
export const ContextProvider: React.FunctionComponent = ({ children }) => {
	return (
		<ViewportContextProvider>
			<ScrollControllerProvider>
				<HeaderContextProvider>{children}</HeaderContextProvider>
			</ScrollControllerProvider>
		</ViewportContextProvider>
	);
};
