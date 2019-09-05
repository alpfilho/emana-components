import React, { FunctionComponent, useLayoutEffect, useState } from 'react';

import { SpMain } from './sitePage.style';
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
		<SpMain
			paddingTop={
				paddingTopProp !== undefined ? paddingTopProp : headerHeight || 0
			}
			background={background}
		>
			{children}
		</SpMain>
	);
};

export default SitePage;
