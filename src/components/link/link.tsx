import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

export type LinkI = Omit<LinkProps, 'component'>;

export const Link: React.FC<LinkI> = ({ to, children }) => {
	return <RouterLink to={to}>{children}</RouterLink>;
};
