import React, { FunctionComponent } from 'react';
import { LogoPropI } from '@components/siteHeader/siteHeader.types';
import { LogoContainer } from './headerLogo.style';

export interface HeaderLogoI {
	readonly logo: LogoPropI | Array<LogoPropI>;
}

export const HeaderLogo: FunctionComponent<HeaderLogoI> = () => {
	return <LogoContainer></LogoContainer>;
};
