import React, { useContext } from 'react';

import { context } from 'contexts/viewport/viewport.context';
import { DesktopHeader } from './components/desktopHeader/desktopHeader.view';
import { MobileHeader } from './components/mobileHeader/mobileHeader.view';
import { LocationDescriptor } from 'history';

export interface LinkProp {
	text: string;
	link: LocationDescriptor;
}

export interface FixedProp {
	trigger: number;
}

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

interface StatesProp {
	default: ElementStylesI;
	fixed?: ElementStylesI;
}

export interface HeaderProps {
	fixed?: FixedProp;
	logo: LogoProp;
	links: Array<LinkProp>;
	states?: StatesProp;
}

export const SiteHeader: React.FunctionComponent<HeaderProps> = ({
	fixed,
	links,
	logo,
	states
}) => {
	const { device } = useContext(context);

	if (device === 'tablet' || device === 'mobile') {
		return <MobileHeader fixed={fixed} logo={logo} links={links} />;
	}

	return (
		<DesktopHeader fixed={fixed} links={links} logo={logo} states={states} />
	);
};
