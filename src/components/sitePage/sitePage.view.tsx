import React, { FunctionComponent } from 'react';

import { SitePageMain } from './sitePage.style';
import { useAvoidHeader } from '@hooks';

export interface SitePageI {
	className?: string;
	paddingTop?: number;
	background?: string;
}

export const SitePage: FunctionComponent<SitePageI> = ({
	className,
	children,
	paddingTop: paddingTopProp = undefined,
	background
}) => {
	const { paddingTop } = useAvoidHeader(paddingTopProp);

	return (
		<SitePageMain
			className={className}
			paddingTop={paddingTop}
			background={background}
		>
			{children}
		</SitePageMain>
	);
};

export default SitePage;
