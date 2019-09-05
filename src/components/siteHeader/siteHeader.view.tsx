import React, { FunctionComponent } from 'react';

import { SiteHeaderI } from './siteHeader.types';

import { DesktopHeader } from './desktopHeader/desktopHeader.view';
import { useViewportValues } from '@hooks';
import { MobileHeader } from '@components/siteHeader/mobileHeader/mobileHeader.view';

export const SiteHeader: FunctionComponent<SiteHeaderI> = ({
	fixed,
	logo,
	links,
	states,
	paddingTop,
	paddingBottom,
	backgroundColor
}) => {
	const { device } = useViewportValues();

	if (device && (device === 'mobile' || device === 'tablet')) {
		return (
			<MobileHeader fixed={fixed} logo={logo} links={links} states={states} />
		);
	}

	return (
		<DesktopHeader
			paddingTop={paddingTop}
			paddingBottom={paddingBottom}
			backgroundColor={backgroundColor}
			fixed={fixed}
			logo={logo}
			links={links}
			states={states}
		/>
	);
};
