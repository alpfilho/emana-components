import * as React from 'react';

import { Container, Content } from './contentContainer.style';

export interface ContentContainerProps {
	readonly className?: string;
}

export const ContentContainer: React.FunctionComponent<
	ContentContainerProps
> = ({ children, className }) => {
	return (
		<Container>
			<Content className={className}>{children}</Content>
		</Container>
	);
};
