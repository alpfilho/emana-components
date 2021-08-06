import React from 'react';

import { SitePageMain } from './sitePage.style';

export interface SitePageI {
	className?: string;
	avoidHeader?: boolean;
}

/**
 * Representa um main
 * @type {React.FC<SitePageI>}
 * @param className {string}
 * @param children {ReactElement}
 * @constructor
 */
export const SitePage: React.FC<SitePageI> = ({ className, children }) => {
	return <SitePageMain className={className}>{children}</SitePageMain>;
};
