import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useSpring, config } from 'react-spring';
import { useLocation } from 'react-router-dom';

import {
	getViewportWidth,
	getViewportHeight,
	getDeviceType,
	getScrollY
} from '@utils/viewport.utils';

import { ViewportContextStateI, DeviceType } from './viewport.types';

/**
 * Viewport Context
 */
export const ViewportContext = createContext<ViewportContextStateI>({
	device: 'desktop',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	scrollTo: () => {}
});

export const ViewportContextProvider: React.FC = ({ children }) => {
	const { pathname } = useLocation();

	const [viewport, animate, stop] = useSpring(
		{
			y: getScrollY(),
			width: getViewportWidth(),
			height: getViewportHeight(),
			onFrame: ({ y }: { y: number }) => {
				window.scrollTo(0, y);
			},
			config: config.slow
		},
		[]
	);

	const [device, setDevice] = useState<DeviceType>('desktop');

	const scrollTo = useCallback(
		({ y, animated = true }) => {
			if (animated) {
				animate({
					y
				});
			} else {
				window.scrollTo(0, y);
			}
		},
		[animate]
	);

	const updateDevice = useCallback(() => {
		const deviceType = getDeviceType(viewport.width.get() || 0);

		if (deviceType !== device) {
			setDevice(deviceType);
		}
	}, [device, viewport.width]);

	const updateViewport = useCallback(() => {
		viewport.y.set(getScrollY());
		viewport.height.set(getViewportHeight());
		viewport.width.set(getViewportWidth());

		updateDevice();
	}, [updateDevice, viewport.height, viewport.width, viewport.y]);

	const onViewportChange = useCallback(() => {
		updateViewport();
	}, [updateViewport]);

	/**
	 * Effect principal da leitura do scroll
	 */
	useEffect(() => {
		/* Primeira execução */
		onViewportChange();

		/**
		 * O Listener é registrado no componente porquê assim conseguimos remover o
		 * listener de forma eficiente (quando o contextProvider é desmontado)
		 */
		window.addEventListener('scroll', onViewportChange);
		window.addEventListener('resize', onViewportChange);

		return (): void => {
			window.removeEventListener('scroll', onViewportChange);
			window.removeEventListener('resize', onViewportChange);
		};
	}, [onViewportChange]);

	useEffect(() => {
		scrollTo({ y: 0, animated: false });
	}, [pathname, scrollTo]);

	const contextState = useMemo(
		() => ({
			viewport,
			scrollTo,
			device
		}),
		[viewport, scrollTo, device]
	);

	return <ViewportContext.Provider value={contextState}>{children}</ViewportContext.Provider>;
};
