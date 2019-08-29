import React, { useContext } from 'react';

import { context } from 'contexts/viewport/viewport.context';
import { DesktopHeader } from './components/desktopHeader/desktopHeader.view';
import { MobileHeader } from './components/mobileHeader/mobileHeader.view';

export interface LogoProp {
	component: Array<React.ReactElement> | React.ReactElement;
	link: Object;
}

interface ElementStylesI {
	transform?: string;
	background?: string;
	color?: string;
	opacity?: number;
}

interface StatesI {
	default?: ElementStylesI;
	fixed?: ElementStylesI;
}

export interface HeaderProps {
	fixed?: boolean;
	logo: LogoProp;
	links: Array<Object>;
	states?: StatesI;
}

export const SiteHeader: React.FunctionComponent<HeaderProps> = ({
	fixed,
	links,
	logo
}) => {
	const { device } = useContext(context);

	if (device === 'tablet' || device === 'mobile') {
		return <MobileHeader logo={logo} />;
	}

	return <DesktopHeader fixed={fixed} links={links} logo={logo} />;
};
