import React from 'react';

import { SitePageMain } from './sitePage.style';
// import { useAvoidHeader } from '../../hooks';

export interface SitePageI {
	className?: string;
	paddingTop?: number;
}

export const SitePage: React.FC<SitePageI> = ({
	className,
	children
	// paddingTop: paddingTopProp = undefined
}) => {
	// const { paddingTop } = useAvoidHeader(paddingTopProp);

	return <SitePageMain className={className}>{children}</SitePageMain>;
};

export default SitePage;
