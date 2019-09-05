import React, { FunctionComponent, useLayoutEffect, useState } from 'react';

import { SitePageMain } from './sitePage.style';
import { useHeaderValues } from '@hooks';

export interface SitePageI {
	paddingTop: number;
	background: string;
}

export const SitePage: FunctionComponent<SitePageI> = ({
	children,
	paddingTop: paddingTopProp = undefined,
	background
}) => {
	const [headerHeight, setHeaderHeight] = useState(0);
	const { height } = useHeaderValues();

	useLayoutEffect(() => {
		const heightSubscription = height.subscribe((value: number) => {
			if (value !== headerHeight) {
				setHeaderHeight(value);
			}
		});

		return () => {
			heightSubscription.unsubscribe();
		};
	}, []);

	return (
		<SitePageMain
			paddingTop={
				paddingTopProp !== undefined ? paddingTopProp : headerHeight || 0
			}
			background={background}
		>
			{children}
		</SitePageMain>
	);
};

export default SitePage;
