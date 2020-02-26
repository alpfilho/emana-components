import React from 'react';

import { useHeaderValues } from '@hooks/useHeader';
import { SitePageMain } from './sitePage.style';

export interface SitePageI {
	className?: string;
	avoidHeader?: boolean;
}

export const SitePage: React.FC<SitePageI> = ({
	className,
	children,
	avoidHeader
}) => {
	const { height: headerHeight } = useHeaderValues();

	return (
		<SitePageMain
			className={className}
			marginTop={avoidHeader ? headerHeight : undefined}
			headerHeight={headerHeight}
		>
			{children}
		</SitePageMain>
	);
};

export default SitePage;
