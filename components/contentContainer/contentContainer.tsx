import React from 'react';

import { Container, Content } from './contentContainer.style';

/**
 * Componente responsável por manter os elementos internos dentro de um limite
 * @param children
 * @constructor
 */
export const ContentContainer: React.FC = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
};
