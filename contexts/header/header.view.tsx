import React, { FunctionComponent, useRef } from 'react';
import { HeaderContext } from './header.context';
import { HeaderContextI } from './header.types';
import { value } from 'popmotion';

export const HeaderContextProvider: FunctionComponent = ({ children }) => {
	const contextValue = useRef<HeaderContextI>({
		height: value(0)
	});

	return (
		<HeaderContext.Provider value={contextValue.current}>
			{children}
		</HeaderContext.Provider>
	);
};
