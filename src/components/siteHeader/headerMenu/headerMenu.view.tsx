import React, { FunctionComponent } from 'react';
import { LinksT, StateTypesI } from '@components/siteHeader/siteHeader.types';

import { HmNav } from './headerMenu.style';
import { MenuItem } from '@components/siteHeader/headerMenu/menuItem/menuItem.view';

export interface HeaderMenuI {
	links: LinksT;
	states?: StateTypesI;
}

export const HeaderMenu: FunctionComponent<HeaderMenuI> = ({ links }) => {
	return (
		<HmNav>
			{links.map((link, index) => (
				<MenuItem key={index} text={link.text} link={link.link} />
			))}
		</HmNav>
	);
};
