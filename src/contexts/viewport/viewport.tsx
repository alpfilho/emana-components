import React, { createContext, useCallback, useLayoutEffect, useReducer } from 'react';
import { useMotionValue } from 'framer-motion';

import {
	getViewportWidth,
	getViewportHeight,
	getDeviceType,
	getScrollY,
	getScrollX
} from '@utils/viewport.utils';

import { ViewportContextStateI, ViewportContextAction } from './viewport.types';

/**
 * Default Context
 */
const defaultContext: ViewportContextStateI = {
	device: 'desktop'
};

/**
 * Viewport Context
 */
export const ViewportContext = createContext<ViewportContextStateI>(defaultContext);

const viewportContextReducer = (
	state: ViewportContextStateI,
	action: ViewportContextAction
): ViewportContextStateI => {
	switch (action.type) {
		case 'update_device': {
			return Object.assign({}, state, {
				device: action.device
			});
		}
		case 'update_values': {
			return Object.assign({}, state, {
				top: action.top,
				left: action.left,
				height: action.height,
				width: action.width
			});
		}
		default: {
			return state;
		}
	}
};

export const ViewportContextProvider: React.FC = ({ children }) => {
	const viewportHeight = useMotionValue(0);
	const viewportWidth = useMotionValue(0);
	const viewportTop = useMotionValue(0);
	const viewportLeft = useMotionValue(0);

	const [viewportContextState, dispatchViewportContextAction] = useReducer(
		viewportContextReducer,
		defaultContext
	);

	const updateSize = useCallback(() => {
		viewportWidth.set(getViewportWidth());
		viewportHeight.set(getViewportHeight());
	}, [viewportHeight, viewportWidth]);

	const updatePosition = useCallback(() => {
		viewportTop.set(getScrollY());
		viewportLeft.set(getScrollX());
	}, [viewportLeft, viewportTop]);

	const updateValues = useCallback(() => {
		dispatchViewportContextAction({
			type: 'update_values',
			height: viewportHeight,
			width: viewportWidth,
			top: viewportTop,
			left: viewportLeft
		});
	}, [viewportTop, viewportHeight, viewportWidth, viewportLeft]);

	const updateDevice = useCallback(() => {
		const deviceType = getDeviceType(viewportWidth.get());

		if (deviceType !== viewportContextState.device) {
			dispatchViewportContextAction({
				type: 'update_device',
				device: deviceType
			});
		}
	}, [viewportContextState.device, viewportWidth]);

	const onViewportChange = useCallback(() => {
		updatePosition();
		updateSize();
		updateDevice();
	}, [updatePosition, updateSize, updateDevice]);

	useLayoutEffect(() => {
		/* Inicialização */
		onViewportChange();
		updateValues();
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
	}, [onViewportChange, updateValues]);

	return (
		<ViewportContext.Provider value={viewportContextState}>{children}</ViewportContext.Provider>
	);
};
