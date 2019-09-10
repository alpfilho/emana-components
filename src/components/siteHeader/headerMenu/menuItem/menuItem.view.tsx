import React, { FunctionComponent } from 'react';

import { MiLi, MiLink } from './menuItem.style';
import { MenuItemI } from '@components/siteHeader/siteHeader.types';

export const MenuItem: FunctionComponent<MenuItemI> = ({
	link,
	text,
	className,
	additionalStyles
}) => {
	return (
		<MiLi className={className} additionalStyles={additionalStyles}>
			<MiLink to={link}>{text}</MiLink>
		</MiLi>
	);
};
