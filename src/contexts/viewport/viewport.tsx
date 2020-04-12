import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useSpring } from 'react-spring';

import {
	getViewportWidth,
	getViewportHeight,
	getDeviceType,
	getScrollY,
	getScrollX
} from '@utils/viewport.utils';

import { ViewportContextStateI, DeviceType, ViewportT } from './viewport.types';

/**
 * Default Context
 */
const defaultContext: ViewportContextStateI = {
	device: 'desktop',
	viewport: {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}
};

/**
 * Viewport Context
 */
export const ViewportContext = createContext<ViewportContextStateI>(defaultContext);

export const ViewportContextProvider: React.FC = ({ children }) => {
	const [viewport, setViewport] = useSpring<ViewportT>(() => ({ x: 0, y: 0, width: 0, height: 0 }));
	const [device, setDevice] = useState<DeviceType>('desktop');

	const contextState = useMemo(
		() => ({
			viewport,
			device
		}),
		[viewport, device]
	);

	const updateDevice = useCallback(() => {
		const deviceType = getDeviceType((viewport.width?.getValue() as number) || 0);

		if (deviceType !== device) {
			setDevice(deviceType);
		}
	}, [device, viewport.width]);

	const updateViewport = useCallback(() => {
		setViewport({
			x: getScrollX(),
			y: getScrollY(),
			height: getViewportHeight(),
			width: getViewportWidth(),
			immediate: true
		});
		updateDevice();
	}, [setViewport, updateDevice]);

	const onViewportChange = useCallback(() => {
		updateViewport();
	}, [updateViewport]);

	useEffect(() => {
		/* Inicialização */
		onViewportChange();
		/**
		 * O Listener é registrado no componente porquê assim conseguimos remover o
		 * listener de forma eficiente (quando o contextProvider é desmontado)
		 */
		window.addEventListener('scroll', onViewportChange, { passive: true });
		window.addEventListener('resize', onViewportChange);

		return (): void => {
			window.removeEventListener('scroll', onViewportChange);
			window.removeEventListener('resize', onViewportChange);
		};
	}, [onViewportChange]);

	return <ViewportContext.Provider value={contextState}>{children}</ViewportContext.Provider>;
};
