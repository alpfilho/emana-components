import React, { FunctionComponent } from 'react';
import { HashLink as Link, HashLinkProps } from 'react-router-hash-link';

import { useHeaderValues, useScrollController } from '../../hooks';
import { getElementScrollOffset } from '../../utils';

export interface HashLinkI extends HashLinkProps {}

export const HashLink: FunctionComponent<HashLinkI> = ({ to, children }) => {
	const { scrollTo } = useScrollController();
	const { height: headerHeight } = useHeaderValues();

	const onNavigate = (elementToScroll: HTMLElement) => {
		const scrollTarget =
			getElementScrollOffset(elementToScroll) - headerHeight.get() - 16;

		scrollTo(scrollTarget);
	};

	return (
		<Link to={to} scroll={onNavigate}>
			{children}
		</Link>
	);
};
