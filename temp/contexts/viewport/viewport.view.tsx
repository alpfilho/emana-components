import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { ViewportValues } from './viewport.class';
import { ViewportContext } from './viewport.context';
import { getDeviceType } from '../../../src/utils';
import { DeviceT, ViewportContextI } from './viewport.types';

export const viewportElement = window;

export const ViewportContextProvider: React.FC = ({ children }) => {
	const viewportValuesRef = useRef<ViewportValues>(new ViewportValues());
	const [device, setDevice] = useState<DeviceT>(undefined);

	useLayoutEffect(() => {
		viewportValuesRef.current.updatePosition();
		viewportValuesRef.current.updateSize();
		updateDevice();
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
