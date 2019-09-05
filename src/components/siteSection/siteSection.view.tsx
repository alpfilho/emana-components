import React, { FunctionComponent } from 'react';
import { SsSection } from '@components/siteSection/siteSection.style';

export interface SiteSectionI {
	className?: string;
	paddingTop?: number;
}

export const SiteSection: FunctionComponent<SiteSectionI> = ({
	children,
	className
}) => {
	return <SsSection className={className}>{children}</SsSection>;
};
