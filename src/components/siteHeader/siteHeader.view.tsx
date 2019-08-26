import * as React from 'react';

import { DesktopHeader } from './components/desktopHeader/desktopHeader.view';

export interface LogoProp {
	readonly component: Array<React.ElementType>;
}

export interface LinkProp {
	readonly pathname: string;
}

export interface SiteHeaderProps {
	readonly fixed: boolean;
	readonly logo: LogoProp;
	readonly links: Array<LinkProp>;
}

export const SiteHeader: React.FunctionComponent<SiteHeaderProps> = () => {
	return <DesktopHeader />;
};
