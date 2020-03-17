import React from 'react';

import { useHeaderValues } from '@hooks/useHeader';
import { SitePageMain } from './sitePage.style';

export interface SitePageI {
	className?: string;
	avoidHeader?: boolean;
}

/**
 * Representa um main que é capaz de evitar o header com a prop `avoidHeader`
 * @type {React.FC<SitePageI>}
 * @param className {string}
 * @param children {ReactElement}
 * @param avoidHeader {boolean}
 * @constructor
 */
export const SitePage: React.FC<SitePageI> = ({ className, children, avoidHeader }) => {
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
