import React, { createContext, useState, useMemo, useEffect } from 'react';

import { HeaderContextI } from './header.types';

/**
 * Default Context
 */
const defaultContext: HeaderContextI = {};

/**
 * Header Context
 */
export const HeaderContext = createContext<HeaderContextI>(defaultContext);

export const HeaderContextProvider: React.FC = ({ children }) => {
	const [headerHeight, setHeaderHeight] = useState(0);

	const headerValue: HeaderContextI = useMemo(
		() => ({
			height: headerHeight,
			setHeaderHeight: setHeaderHeight
		}),
		[headerHeight]
	);

	return (
		<HeaderContext.Provider value={headerValue}>
			{children}
		</HeaderContext.Provider>
	);
};
