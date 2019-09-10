import React, { FunctionComponent } from 'react';

import { SitePageMain } from './sitePage.style';
import { useAvoidHeader } from '@hooks';

export interface SitePageI {
	paddingTop: number;
	background: string;
}

export const SitePage: FunctionComponent<SitePageI> = ({
	children,
	paddingTop: paddingTopProp = undefined,
	background
}) => {
	const { paddingTop } = useAvoidHeader(paddingTopProp);

	return (
		<SitePageMain paddingTop={paddingTop} background={background}>
			{children}
		</SitePageMain>
	);
};

export default SitePage;
