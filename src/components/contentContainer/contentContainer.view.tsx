import React from 'react';

import { Container, Content } from './contentContainer.style';

export const ContentContainer: React.FunctionComponent = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
};
