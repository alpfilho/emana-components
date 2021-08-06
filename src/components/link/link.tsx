import React, { useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';

import { useViewport } from '@hooks/useViewport';
import { getElementScrollOffset } from '@utils/viewport.utils';

export interface LinkI {
	to: string;
	className?: string;
}

/**
 * Link comum
 */
export const Link: React.FC<LinkI> = ({ to, className, children }) => {
	const { scrollTo: scrollToViewport } = useViewport();

	const scrollTo = useCallback(
		(element) => {
			const scrollY = getElementScrollOffset(element);
			scrollToViewport({ y: scrollY });
		},
		[scrollToViewport]
	);

	if (to.startsWith('http')) {
		return (
			<a href={to} className={className} target="_blank" rel="noreferrer noopener">
				{children}
			</a>
		);
	}

	return (
		<HashLink to={to} className={className} scroll={scrollTo}>
			{children}
		</HashLink>
	);
};
