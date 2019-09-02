import React, { useRef, useEffect } from 'react';
import { Viewport } from './viewport.class';
import { context } from './viewport.context';

export const ViewportContextProvider: React.FunctionComponent<{}> = ({
	children
}) => {
	const state = useRef<Viewport>(new Viewport());

	useEffect(() => {
		const onViewportChange = () => {
			state.current.updatePosition();
			state.current.updateSize();
		};

		/**
		 * O Listener é registrado no componente e não na classe porquê assim
		 * conseguimos remover o listener de forma eficiente (quando o contextProvider é desmontado)
		 */
		window.addEventListener('scroll', onViewportChange);
		window.addEventListener('resize', onViewportChange);

		return () => {
			window.removeEventListener('scroll', onViewportChange);
			window.removeEventListener('resize', onViewportChange);
		};
	}, []);

	return <context.Provider value={state.current}>{children}</context.Provider>;
};
