import React, { FunctionComponent } from 'react';
import { LinksT } from '@components/siteHeader/siteHeader.types';

export interface HeaderMenuI {
	links: LinksT;
}

export const HeaderMenu: FunctionComponent<HeaderMenuI> = () => {
	return <div className=""></div>;
};
