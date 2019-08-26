import React, { createContext, useRef } from 'react';
import { Viewport } from './viewport.class';

const viewportContext = createContext({});
const { Provider } = viewportContext;

export const ViewportContextProvider: React.FunctionComponent<{}> = ({
	children
}) => {
	const state = useRef(new Viewport());

	return <Provider value={state.current}>{children}</Provider>;
};
