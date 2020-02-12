import React, { FunctionComponent } from 'react';

import { SitePageMain } from './sitePage.style';
import { useAvoidHeader } from '@hooks';

export interface SitePageI {
	className?: string;
	paddingTop?: number;
}

export const SitePage: FunctionComponent<SitePageI> = ({
	className,
	children,
	paddingTop: paddingTopProp = undefined
}) => {
	const { paddingTop } = useAvoidHeader(paddingTopProp);

	return (
		<SitePageMain className={className} paddingTop={paddingTop}>
			{children}
		</SitePageMain>
	);
};

export default SitePage;
