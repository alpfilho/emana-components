import { DeviceT } from '@contexts/viewport/viewport.types';
import { Value } from 'popmotion/lib/reactions/value';

export const screenSizes = {
	/**
	 * tablet
	 */
	tablet: 768,
	/**
	 * Small Device
	 */
	sm: 960,
	/**
	 * Medium Device
	 */
	md: 1024,
	/**
	 * Large Device
	 */
	lg: 1366,
	/**
	 * Widescreen
	 */
	wd: 1600,
	/**
	 * Full HD
	 */
	fullhd: 1920
};

export const getDeviceType = (viewportWidth: Value): DeviceT => {
	if (viewportWidth <= screenSizes.tablet) {
		return 'mobile';
	} else if (viewportWidth <= screenSizes.sm) {
		return 'tablet';
	}
	return 'desktop';
};

export const getViewportWidth = (): number => {
	return window.innerWidth;
};

export const getViewportHeight = (): number => {
	return window.innerHeight;
};
