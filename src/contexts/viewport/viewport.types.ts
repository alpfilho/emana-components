import { SpringValue } from 'react-spring';

/**
 * Device Types
 */
export type DeviceType = 'smartphone' | 'tablet' | 'desktop';

export type ViewportT = {
	y: SpringValue<number>;
	height: SpringValue<number>;
	width: SpringValue<number>;
};

/**
 * Viewport State
 */
export interface ViewportContextStateI {
	viewport?: ViewportT;
	scrollTo: (options: { y?: number; animated?: number }) => void;
	device: DeviceType;
}
