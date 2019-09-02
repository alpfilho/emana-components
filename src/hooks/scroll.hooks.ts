import { useContext, useEffect, useLayoutEffect } from 'react';
import { context } from 'contexts/viewport/viewport.context';
import { ViewportListenerType } from 'contexts/viewport/viewport.class';

/**
 * Hook para executar callbacks sempre que o scroll do contexto atualizar.
 */
export const useViewportListener = (onScroll: ViewportListenerType) => {
	const viewport = useContext(context);

	useLayoutEffect(() => {
		if (onScroll) {
			onScroll(viewport.get());
		}
	}, []);

	useEffect(() => {
		if (onScroll) {
			const listener = viewport.addListener(onScroll);
			return () => {
				if (listener && listener.remove) {
					listener.remove();
				}
			};
		}

		return undefined;
	}, []);
};
