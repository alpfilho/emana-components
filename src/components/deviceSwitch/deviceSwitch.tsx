import React from 'react';
import { useViewport } from '@hooks/useViewport';

export interface DeviceSwitchI {
	smartphone?: React.ReactElement;
	tablet?: React.ReactElement;
	desktop?: React.ReactElement;
}

export const DeviceSwitch: React.FC<DeviceSwitchI> = ({
	desktop,
	smartphone,
	tablet
}) => {
	const { device } = useViewport();

	if (device === 'smartphone') {
		if (React.isValidElement(smartphone)) {
			return smartphone;
		}
		if (React.isValidElement(tablet)) {
			return tablet;
		}
	}

	if (device === 'tablet') {
		if (React.isValidElement(tablet)) {
			return tablet;
		}
	}

	/* Desktop é o default */
	if (desktop) {
		return desktop;
	}

	return null;
};
