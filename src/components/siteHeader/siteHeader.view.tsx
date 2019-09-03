import React, { FunctionComponent } from 'react';

import { SiteHeaderI } from './siteHeader.types';

import { DesktopHeader } from './desktopHeader/desktopHeader.view';

export const SiteHeader: FunctionComponent<SiteHeaderI> = ({
	fixed,
	logo,
	links,
	states
}) => {
	return (
		<DesktopHeader fixed={fixed} logo={logo} links={links} states={states} />
	);
};
