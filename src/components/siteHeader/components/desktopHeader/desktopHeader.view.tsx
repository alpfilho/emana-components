import * as React from 'react';
import {
	Background,
	Container,
	Content,
	LogoContainer
} from './desktopHeader.style';
import { LogoProp } from 'components/siteHeader/siteHeader.view';
import { useViewportListener } from 'hooks/scroll.hooks';

/* Biblioteca que é utilizada pelo react-router-dom */
import { LocationDescriptor } from 'history';
import { HashLink as Link } from 'react-router-hash-link';
import { DesktopHeaderLogo } from 'components/siteHeader/components/desktopHeader/components/desktopHeaderLogo.view';

export interface DesktopHeaderProps {
	readonly fixed?: boolean;
	readonly logo: LogoProp;
	readonly links: Array<LocationDescriptor>;
}

export const DesktopHeader: React.FunctionComponent<DesktopHeaderProps> = ({
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
