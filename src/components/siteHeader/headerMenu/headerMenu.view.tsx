import React, { FunctionComponent } from 'react';
import {
	AdditionalClassNamesElementsI,
	AdditionalStylesI,
	LinksT,
	StateTypesI
} from '@components/siteHeader/siteHeader.types';

import { HmNav } from './headerMenu.style';
import { MenuItem } from '@components/siteHeader/headerMenu/menuItem/menuItem.view';

export interface HeaderMenuI {
	additionalClassNames?: AdditionalClassNamesElementsI;
	additionalStyles?: AdditionalStylesI;
	links: LinksT;
	states?: StateTypesI;
}

export const HeaderMenu: FunctionComponent<HeaderMenuI> = ({
	additionalClassNames,
	additionalStyles,
	links
}) => {
	const menuItemClassName = () => {
		if (additionalClassNames) {
			if (additionalClassNames.menuItem) {
				return additionalClassNames.menuItem;
			}
		}
		return undefined;
	};

	const menuItemAddionalStyles = () => {
		if (additionalStyles) {
			if (additionalStyles.menuItem) {
				return additionalStyles.menuItem;
			}
		}
		return undefined;
	};

	return (
		<HmNav>
			{links.map((link, index) => (
				<MenuItem
					key={index}
					text={link.text}
					link={link.link}
					className={menuItemClassName()}
					additionalStyles={menuItemAddionalStyles()}
				/>
			))}
		</HmNav>
	);
};
