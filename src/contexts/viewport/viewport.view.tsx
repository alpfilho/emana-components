import React, { useRef, useEffect } from 'react';
import { Viewport } from './viewport.class';
import { context } from './viewport.context';

export const ViewportContextProvider: React.FunctionComponent<{}> = ({
	children
}) => {
	const state = useRef<Viewport>(new Viewport());

	useEffect(() => {
		const onScroll = () => {
			state.current.updatePosition();
		};

		const onResize = () => {
			state.current.updateSize();
		};

		/**
		 * O Listener é registrado no componente e não na classe porquê assim
		 * conseguimos remover o listener de forma eficiente (quando o contextProvider é desmontado)
		 */
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return <context.Provider value={state.current}>{children}</context.Provider>;
};
