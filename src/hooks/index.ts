import { useContext, useLayoutEffect, useState } from 'react';

import { ViewportContext } from '@contexts/viewport/viewport.context';
import { HeaderContext } from '@contexts/header/header.context';
import { ScrollControllerContext } from '@contexts/scrollController/scrollController.context';

/**
 * Hook para usar a viewport do contexto
 */
export const useViewportValues = () => {
	return useContext(ViewportContext);
};

/**
 * Hook para ler o tamanho do Header
 */
export const useHeaderValues = () => {
	return useContext(HeaderContext);
};

/**
 * Hook para ter acesso aos controles do Scroll
 */
export const useScrollController = () => {
	return useContext(ScrollControllerContext);
};

/**
 * Hook para evitar o Header
 */
export const useAvoidHeader = (paddingTopProp?: number) => {
	const { height } = useHeaderValues();
	const [headerHeight, setHeaderHeight] = useState(0);

	useLayoutEffect(() => {
		if (paddingTopProp === undefined) {
			const heightSubscription = height.subscribe((value: number) => {
				if (value !== headerHeight) {
					setHeaderHeight(value);
				}
			});

			return () => {
				heightSubscription.unsubscribe();
			};
		}
		return undefined;
	}, []);

	return {
		paddingTop:
			paddingTopProp !== undefined ? paddingTopProp : headerHeight || 0
	};
};
