import React from 'react';
import { LogoProp } from 'components/siteHeader/siteHeader.view';

export interface MobileHeaderI {
	logo: LogoProp;
}

export const MobileHeader: React.FunctionComponent<MobileHeaderI> = () => {
	return <div />;
};
