import React from 'react';
import { useViewportValues } from '../../hooks';

export interface DeviceSwitchI {
	mobile?: React.ReactElement;
	tablet?: React.ReactElement;
	desktop?: React.ReactElement;
}

export const DeviceSwitch: React.FC<DeviceSwitchI> = ({
	desktop,
	mobile,
	tablet
}) => {
	const { device } = useViewportValues();

	if (device) {
		if (mobile && device === 'mobile') {
			return mobile;
		}

		if (tablet && device === 'tablet') {
			return tablet;
		}

		/* Desktop é o default */
		if (desktop) {
			return desktop;
		}
	}

	return null;
};
