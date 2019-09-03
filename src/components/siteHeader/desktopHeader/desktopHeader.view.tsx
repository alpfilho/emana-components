import React, { FunctionComponent, useEffect } from 'react';

import { DkAnchor, DkBackground, DkHeader } from './desktopHeader.style';
import { ContentContainer } from '@components/contentContainer';

import { SiteHeaderI } from '@components/siteHeader/siteHeader.types';
import { HeaderLogo } from '@components/siteHeader/headerLogo';
import { HeaderMenu } from '@components/siteHeader/headerMenu';

export const DesktopHeader: FunctionComponent<SiteHeaderI> = ({
	fixed,
	links,
	logo
}) => {
	useEffect(() => {
		console.log(links);
		console.log(logo);
	});

	return (
		<DkHeader fixed={fixed !== undefined && fixed !== false}>
			<DkAnchor>
				<ContentContainer>
					<HeaderLogo logo={logo} />
					<HeaderMenu links={links} />
				</ContentContainer>
				<DkBackground />
			</DkAnchor>
		</DkHeader>
	);
};
