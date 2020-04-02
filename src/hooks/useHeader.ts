import React, { useLayoutEffect, useContext, useCallback, MutableRefObject } from 'react';

import { getElementRect } from '@utils/style.utils';

import { HeaderContext } from '@contexts/header';
import { HeaderContextI } from '@contexts/header/header.types';
import useMeasure from 'react-use-measure';

/**
 * Hook para usar os valores do header
 */
export const useHeaderValues = (): HeaderContextI => {
	return useContext(HeaderContext);
};

/**
 * Hook para registrar a altura do header
 */
export const useHeaderHeightUpdate = () => {
	const { height, setHeaderHeight } = useHeaderValues();

	const [ref, bounds] = useMeasure();

	useLayoutEffect(() => {
		if (bounds.height !== height && setHeaderHeight) {
			setHeaderHeight(bounds.height);
		}
	}, [bounds, height, setHeaderHeight]);

	return ref;
};
