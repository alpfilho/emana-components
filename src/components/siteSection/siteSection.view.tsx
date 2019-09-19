import React, { FunctionComponent } from 'react';
import { SsSection } from '@components/siteSection/siteSection.style';

export interface SiteSectionI {
	className?: string;
	id?: string;
	paddingTop?: number;
}

export const SiteSection: FunctionComponent<SiteSectionI> = ({
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
