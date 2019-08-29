import * as React from 'react';
import {
	Background,
	Container,
	Content,
	LogoContainer
} from './desktopHeader.style';
import { HeaderProps } from 'components/siteHeader/siteHeader.view';
import { useViewportListener } from 'hooks/scroll.hooks';

import { HashLink as Link } from 'react-router-hash-link';
import { DesktopHeaderLogo } from 'components/siteHeader/components/desktopHeader/components/desktopHeaderLogo.view';

export const DesktopHeader: React.FunctionComponent<HeaderProps> = ({
	fixed,
	logo
}) => {
	const onViewportChange = () => {
		console.log('deu aquela scrollada meio manca');
	};

	useViewportListener(onViewportChange);

	return (
		<Container fixed={fixed}>
			<Content>
				<Link to={logo.link}>
					<LogoContainer>
						<DesktopHeaderLogo logo={logo} />
					</LogoContainer>
				</Link>
			</Content>
			<Background />
		</Container>
	);
};
