/**
 * Device Types
 */
export type DeviceType = 'smartphone' | 'tablet' | 'desktop';

export type ViewportT = {
	x?: number | string;
	y?: number | string;
	height?: number | string;
	width?: number | string;
};

/**
 * Viewport State
 */
export interface ViewportContextStateI {
	viewport?: ViewportT;
	scrollTo: (options: { y?: number; x?: number; animated?: number }) => void;
	device: DeviceType;
}
