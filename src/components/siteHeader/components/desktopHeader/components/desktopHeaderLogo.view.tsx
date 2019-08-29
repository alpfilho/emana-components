import React, { useEffect } from 'react';
import { LogoProp } from 'components/siteHeader/siteHeader.view';

export interface DesktopHeaderLogoProps {
	logo: LogoProp;
}

export const DesktopHeaderLogo: React.FunctionComponent<
	DesktopHeaderLogoProps
> = ({ logo }) => {
	const {} = logo;

	useEffect(() => {
		console.log(logo);
	}, []);
};
