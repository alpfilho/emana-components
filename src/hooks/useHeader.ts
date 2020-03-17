import { useLayoutEffect, useContext, useCallback, MutableRefObject } from 'react';

import { getElementRect } from '@utils/style.utils';

import { HeaderContext } from '@contexts/header';
import { HeaderContextI } from '@contexts/header/header.types';

/**
 * Hook para usar os valores do header
 */
export const useHeaderValues = (): HeaderContextI => {
	return useContext(HeaderContext);
};

/**
 * Hook para registrar a altura do header
 * @param headerContainer {MutableRefObject<HTMLElement>} Referência do container do header
 */
export const useHeaderHeightUpdate = (headerContainer: MutableRefObject<HTMLElement>): void => {
	const { height, setHeaderHeight } = useHeaderValues();

	const onResize = useCallback(() => {
		const headerElement = headerContainer.current;

		const { height: heightOnResize } = getElementRect(headerElement);
		if (heightOnResize !== height && setHeaderHeight) {
			setHeaderHeight(heightOnResize);
		}
	}, [headerContainer, height, setHeaderHeight]);

	useLayoutEffect(() => {
		const headerElement = headerContainer.current;
		const { height: heightOnMout } = getElementRect(headerElement);

		if (setHeaderHeight) {
			setHeaderHeight(heightOnMout);
		}

		window.addEventListener('resize', onResize, { passive: true });

		return (): void => {
			window.removeEventListener('resize', onResize);
		};
	}, [headerContainer, onResize, setHeaderHeight]);
};
