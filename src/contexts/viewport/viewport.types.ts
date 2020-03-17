import { MotionValue } from 'framer-motion';

/**
 * Device Types
 */
export type DeviceType = 'smartphone' | 'tablet' | 'desktop';

/**
 * Viewport State
 */
export interface ViewportContextStateI {
	top?: MotionValue;
	left?: MotionValue;
	height?: MotionValue;
	width?: MotionValue;
	device: DeviceType;
}

/**
 * Viewport Actions
 */
export type ViewportContextAction =
	| { type: 'update_device'; device: DeviceType }
	| {
			type: 'update_values';
			top?: MotionValue;
			left?: MotionValue;
			height?: MotionValue;
			width?: MotionValue;
	  };
