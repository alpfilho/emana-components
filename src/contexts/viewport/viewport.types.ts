/**
 * Device Types
 */
export type DeviceType = 'smartphone' | 'tablet' | 'desktop';

/**
 * Viewport State
 */
export interface ViewportContextStateI {
	top?: number;
	left?: number;
	height?: number;
	width?: number;
	device: DeviceType;
}

/**
 * Viewport Actions
 */
export type ViewportContextAction =
	| { type: 'update_device'; device: DeviceType }
	| {
			type: 'update_values';
			top?: number;
			left?: number;
			height?: number;
			width?: number;
	  };
