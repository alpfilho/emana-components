import { DeviceType } from '@contexts/viewport/viewport.types';

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

export const getDeviceType = (viewportWidth: number): DeviceType => {
	if (viewportWidth <= screenSizes.tablet) {
		return 'smartphone';
	} else if (viewportWidth <= screenSizes.sm) {
		return 'tablet';
	}
	return 'desktop';
};

export const getViewportWidth = (): number => {
	return window.innerWidth || 0;
};

export const getViewportHeight = (): number => {
	return window.innerHeight || 0;
};

export const getScrollY = (): number => {
	return window.pageYOffset || 0;
};

export const getScrollX = (): number => {
	return window.pageXOffset || 0;
};

export const getElementScrollOffset = (element: HTMLElement): number => {
	return element.getBoundingClientRect().top + getScrollY();
};
