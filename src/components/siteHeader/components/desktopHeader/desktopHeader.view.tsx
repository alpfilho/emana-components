import * as React from 'react';
import { Background, Container, Content } from './desktopHeader.style';

export const DesktopHeader: React.FunctionComponent<{}> = () => {
	return (
		<Container>
			<Content />
			<Background />
		</Container>
	);
};
