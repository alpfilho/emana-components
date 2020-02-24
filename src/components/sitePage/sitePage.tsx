import React from 'react';

import { SitePageMain } from './sitePage.style';

export interface SitePageI {
	className?: string;
	// avoidHeader?: boolean;
}

export const SitePage: React.FC<SitePageI> = ({
	className,
	children,
	// avoidHeader
}) => {
	// const { paddingTop } = useAvoidHeader(paddingTopProp);

	return <SitePageMain className={className}>{children}</SitePageMain>;
};

export default SitePage;
