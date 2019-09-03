import React from 'react';
import { LinkProp } from '../../types';
import {
	Li,
	Link
} from 'components/oldSiteHeader/components/menuItem/menuItem.style';

export interface MenuItemProps {
	link: LinkProp;
}

export const MenuItem: React.FunctionComponent<MenuItemProps> = ({
	link: linkProp
}) => {
	const { text, link } = linkProp;

	return (
		<Li>
			<Link to={link} title={text}>
				{text}
			</Link>
		</Li>
	);
};
