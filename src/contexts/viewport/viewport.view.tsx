import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { ViewportValues } from './viewport.class';
import { ViewportContext } from './viewport.context';
import { getDeviceType } from '@utils';
import { DeviceT } from '@contexts/viewport/viewport.types';

export const ViewportContextProvider: React.FunctionComponent<{}> = ({
	children
}) => {
	const viewportValuesRef = useRef<ViewportValues>(new ViewportValues());
	const [device, setDevice] = useState<DeviceT>(undefined);

	useLayoutEffect(() => {
		const { top } = viewportValuesRef.current.get();
		const scrollY = top.get();
		const deviceType = getDeviceType(scrollY);
		setDevice(deviceType);
	});

	useEffect(() => {
		const onViewportChange = () => {
			viewportValuesRef.current.updatePosition();
			viewportValuesRef.current.updateSize();

			const { top } = viewportValuesRef.current.get();
			const scrollY = top.get();
			const deviceType = getDeviceType(scrollY);

			if (deviceType !== device) {
				setDevice(deviceType);
			}
		};

		/**
		 * O Listener é registrado no componente e não na classe porquê assim
		 * conseguimos remover o listener de forma eficiente (quando o contextProvider é desmontado)
		 */
		window.addEventListener('scroll', onViewportChange);
		window.addEventListener('resize', onViewportChange);

		return () => {
			window.removeEventListener('scroll', onViewportChange);
			window.removeEventListener('resize', onViewportChange);
		};
	}, []);

	return (
		<ViewportContext.Provider
			value={{ viewportValues: viewportValuesRef.current.get(), device }}
		>
			{children}
		</ViewportContext.Provider>
	);
};
