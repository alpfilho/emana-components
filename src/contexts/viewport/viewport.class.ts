import {
	getDeviceType,
	getViewportHeight,
	getViewportWidth
} from 'utils/viewport.utils';

import { getScrollX, getScrollY } from 'utils/scroll.utils';

export class Viewport {
	top: number;
	bottom: number;
	left: number;
	right: number;
	height: number;
	width: number;
	device: string;
	listeners: Array<Function>;

	constructor() {
		this.listeners = [];
		this.updatePosition();
		this.updateSize();
	}

	public get() {
		return {
			top: this.top,
			bottom: this.bottom,
			left: this.left,
			right: this.right,
			device: this.device
		};
	}

	public addListener(listener: Function) {
		const listenerId = this.listeners.length;
		this.listeners.push(listener);
		return {
			removeListener: () => {
				this.listeners = this.listeners.splice(listenerId, 1);
			}
		};
	}

	public updatePosition() {
		const y = getScrollY();
		const x = getScrollX();

		this.top = y;
		this.bottom = y + (this.height || 0);

		this.left = x;
		this.right = x + (this.width || 0);

		return this.get();
	}

	public updateSize() {
		this.height = getViewportHeight();
		this.width = getViewportWidth();
		this.device = getDeviceType(this.width);
		return this.get();
	}
}
