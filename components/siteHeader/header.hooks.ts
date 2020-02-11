import { useLayoutEffect, useRef, RefObject } from 'react';
import { useHeaderValues } from '../../hooks';

import { value } from 'popmotion';

export const useUpdateHeaderHeight = (
	containerRef: RefObject<HTMLElement>
): void => {
	const { height } = useHeaderValues();
	const prevHeight = useRef(height.get());

	/**
	 * Atualiza o tamanho do header no context
	 */
	useLayoutEffect(() => {
		if (
			containerRef.current &&
			prevHeight.current !== containerRef.current.clientHeight
		) {
			height.update(containerRef.current.clientHeight);
			prevHeight.current = height.get();
		}
	}, [containerRef.current]);
};

export const useHeaderControlRef = () => {
	return useRef({
		isFixedValue: value(0),
		prevIsFixed: undefined
	});
};
