import React, { useContext } from 'react';

import { context } from 'contexts/viewport/viewport.context';
import { DesktopHeader } from './components/desktopHeader/desktopHeader.view';
import { MobileHeader } from './components/mobileHeader/mobileHeader.view';

import { HeaderProps } from './types';

export const SiteHeader: React.FunctionComponent<HeaderProps> = ({
	links,
	logo,
	states
}) => {
	const { device } = useContext(context);

	if (device === 'tablet' || device === 'mobile') {
		return <MobileHeader logo={logo} links={links} states={states} />;
	}

	return <DesktopHeader links={links} logo={logo} states={states} />;
};
