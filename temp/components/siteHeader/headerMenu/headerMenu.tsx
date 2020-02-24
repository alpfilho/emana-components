import React, { FunctionComponent } from 'react';

import { HmNav } from './headerMenu.style';
import { MenuItem } from './menuItem/menuItem';
import { MenuI } from '../header.types';

export const HeaderMenu: FunctionComponent<MenuI> = ({
	addClassNames,
	// additionalStyles,
	links
}) => {
	// const menuItemClassName = () => {
	// 	if (additionalClassNames) {
	// 		if (additionalClassNames.menuItem) {
	// 			return additionalClassNames.menuItem;
	// 		}
	// 	}
	// 	return undefined;
	// };
	//
	// const menuItemAddionalStyles = () => {
	// 	if (additionalStyles) {
	// 		if (additionalStyles.menuItem) {
	// 			return additionalStyles.menuItem;
	// 		}
	// 	}
	// 	return undefined;
	// };

	return (
		<HmNav>
			{links &&
				links.map((link: any, index: any) => (
					<MenuItem
						key={index}
						text={link.text}
						link={link.link}
						className={addClassNames.menuItem}
						// additionalStyles={menuItemAddionalStyles()}
					/>
				))}
		</HmNav>
	);
};
