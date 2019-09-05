import React, { FunctionComponent } from 'react';

import { MiLi } from './menuItem.style';
import { HashLink } from 'react-router-hash-link';
import { MenuItemI } from '@components/siteHeader/siteHeader.types';

export const MenuItem: FunctionComponent<MenuItemI> = ({ link, text }) => {
	return (
		<MiLi>
			<HashLink to={link}>{text}</HashLink>
		</MiLi>
	);
};
