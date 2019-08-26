import React from 'react';

import { ViewportContextProvider } from 'contexts/viewport/viewport.context';

export const ContextProvider: React.FunctionComponent<{}> = ({ children }) => {
	return <ViewportContextProvider>{children}</ViewportContextProvider>;
};
