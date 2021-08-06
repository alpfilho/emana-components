import React from 'react';
import { SsSection } from './siteSection.style';

export interface SiteSectionI {
	className?: string;
	id?: string;
	paddingTop?: number;
}

export const SiteSection: React.FC<SiteSectionI> = ({
	children,
	className,
	id
}) => {
	return (
		<SsSection id={id} className={className}>
			{children}
		</SsSection>
	);
};
