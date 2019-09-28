import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { ViewportValues } from './viewport.class';
import { ViewportContext } from './viewport.context';
import { getDeviceType } from '@utils';
import { DeviceT, ViewportContextI } from '@contexts/viewport/viewport.types';

export const viewportElement = window;

export const ViewportContextProvider: React.FC = ({ children }) => {
	const viewportValuesRef = useRef<ViewportValues>(new ViewportValues());
	const [device, setDevice] = useState<DeviceT>(undefined);

	const updateDevice = () => {
		const { width } = viewportValuesRef.current.get();
		const deviceType = getDeviceType(width.get());

		if (deviceType !== device) {
			setDevice(deviceType);
		}
	};

	useLayoutEffect(() => {
		viewportValuesRef.current.updatePosition();
		viewportValuesRef.current.updateSize();
		updateDevice();
	}, []);

	useEffect(() => {
		const onViewportChange = () => {
			viewportValuesRef.current.updatePosition();
			viewportValuesRef.current.updateSize();
			updateDevice();
		};

		/**
		 * O Listener é registrado no componente e não na classe porquê assim
		 * conseguimos remover o listener de forma eficiente (quando o contextProvider é desmontado)
		 */
		viewportElement.addEventListener('scroll', onViewportChange);
		viewportElement.addEventListener('resize', onViewportChange);

		return () => {
			viewportElement.removeEventListener('scroll', onViewportChange);
			viewportElement.removeEventListener('resize', onViewportChange);
		};
	}, []);

	return (
		<ViewportContext.Provider
			value={
				{
					viewportValues: viewportValuesRef.current.get(),
					updateViewportValues: () => {
						viewportValuesRef.current.updateSize();
						viewportValuesRef.current.updatePosition();
					},
					device
				} as ViewportContextI
			}
		>
			{children}
		</ViewportContext.Provider>
	);
};
