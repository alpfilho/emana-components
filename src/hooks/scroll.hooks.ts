import { useContext, useEffect } from 'react';
import { context } from 'contexts/viewport/viewport.context';

/**
 * Hook para executar callbacks sempre que o scroll do contexto atualizar.
 */
export const useViewportListener = (onScroll: Function) => {
	const viewport = useContext(context);

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
