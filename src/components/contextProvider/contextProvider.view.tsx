import React from 'react';

import { ViewportContextProvider } from 'contexts/viewport/viewport.view';

export const ContextProvider: React.FunctionComponent<{}> = ({ children }) => {
	return <ViewportContextProvider>{children}</ViewportContextProvider>;
};
