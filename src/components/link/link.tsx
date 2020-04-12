import React from 'react';
import { HashLink } from 'react-router-hash-link';

export interface LinkI {
	to: string;
	className?: string;
}

/**
 * Link comum
 */
export const Link: React.FC<LinkI> = ({ to, className, children }) => {
	if (to.startsWith('http')) {
		return (
			<a href={to} className={className} target="_blank" rel="noreferrer noopener">
				{children}
			</a>
		);
	}

	return (
		<HashLink to={to} className={className}>
			{children}
		</HashLink>
	);
};
