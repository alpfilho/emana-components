import React from 'react';

import { ViewportContextProvider } from '@contexts';

export const ContextProvider: React.FunctionComponent<{}> = ({ children }) => {
	return <ViewportContextProvider>{children}</ViewportContextProvider>;
};
