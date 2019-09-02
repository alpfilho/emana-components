import React, { useContext, useLayoutEffect, useRef, useState } from 'react';

import {
	Background,
	Container,
	Content,
	ContentContainer,
	LogoContainer,
	Nav
} from './desktopHeader.style';

import { HeaderProps, StatesT } from '../../types';
import { getVariants, transformTemplate } from '../../helpers';

import { HashLink as Link } from 'react-router-hash-link';
import { DesktopHeaderLogo } from './components/destopHeaderLogo/desktopHeaderLogo.view';
import { MenuItem } from '../menuItem/menuItem.view';
import { useViewportListener } from 'hooks/scroll.hooks';
import { context } from 'contexts/viewport/viewport.context';

export const DesktopHeader: React.FunctionComponent<HeaderProps> = ({
	logo,
	links,
	states
}) => {
	const viewportContext = useContext(context);
	const lastValues = useRef<{ isFixed: boolean | undefined }>({
		isFixed: undefined
	});

	const getIsFixed = (scrollY: number): boolean => scrollY > 0;
	const getState = (isFixed: boolean) => {
		if (isFixed) {
			return 'fixed';
		} else {
			return 'default';
		}
	};

	const [state, setState] = useState<StatesT | undefined>(undefined);

	const backgroundVariants = getVariants(states, 'background');
	const contentVariants = getVariants(states, 'content');

	useLayoutEffect(() => {
		viewportContext.updatePosition();
		const { top } = viewportContext.get();
		const isFixed = getIsFixed(top);
		setState(getState(isFixed));
	}, []);

	useViewportListener(({ top }) => {
		const isFixed = getIsFixed(top);
		if (isFixed !== lastValues.current.isFixed) {
			setState(getState(isFixed));
		}
		lastValues.current.isFixed = isFixed;
	});

	if (state !== undefined) {
		return (
			<Container>
				<ContentContainer>
					<Content
						initial={getState(getIsFixed(viewportContext.get().top))}
						animate={state}
						variants={contentVariants}
						transformTemplate={transformTemplate}
					>
						<Link to={logo.link}>
							<LogoContainer
								logoWidth={logo.width}
								logoAspectRatio={logo.aspectRatio}
							>
								<DesktopHeaderLogo states={states} logo={logo} />
							</LogoContainer>
						</Link>
						<Nav>
							{links.map((link, index) => (
								<MenuItem link={link} key={index} />
							))}
						</Nav>
					</Content>
				</ContentContainer>
				<Background
					initial={getState(getIsFixed(viewportContext.get().top))}
					animate={state}
					variants={backgroundVariants}
					transformTemplate={transformTemplate}
				/>
			</Container>
		);
	}

	return null;
};
