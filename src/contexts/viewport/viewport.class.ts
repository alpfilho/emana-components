import {
	getDeviceType,
	getViewportHeight,
	getViewportWidth
} from 'utils/viewport.utils';

import { getScrollX, getScrollY } from 'utils/scroll.utils';

export type ViewportListenerType = (viewport: viewportI) => any;

interface viewportI {
	top: number;
	bottom: number;
	left: number;
	right: number;
	height: number;
	width: number;
	device: 'mobile' | 'tablet' | 'desktop';
}

export class Viewport {
	top: number;
	bottom: number;
	left: number;
	right: number;
	height: number;
	width: number;
	device: 'mobile' | 'tablet' | 'desktop';
	private listeners: Array<ViewportListenerType>;
	private isRunningListeners: boolean;

	constructor() {
		this.listeners = [];
		this.updatePosition();
		this.updateSize();
	}

	public get() {
		const viewport: viewportI = {
			top: this.top,
			bottom: this.bottom,
			left: this.left,
			right: this.right,
			height: this.height,
			width: this.width,
			device: this.device
		};

		return viewport;
	}

	public addListener(listener: ViewportListenerType) {
		const listenerId = this.listeners.length;
		this.listeners.push(listener);
		return {
			remove: () => {
				this.listeners = this.listeners.splice(listenerId, 1);
			}
		};
	}

	private requestListenersUpdate() {
		if (!this.isRunningListeners) {
			requestAnimationFrame(this.updateListeners.bind(this));
			this.isRunningListeners = true;
		}
	}

	private updateListeners() {
		for (let index = 0; index < this.listeners.length; index++) {
			this.listeners[index](this.get());
		}

		this.isRunningListeners = false;
	}

	public updatePosition() {
		const y = getScrollY();
		const x = getScrollX();

		this.top = y;
		this.bottom = y + (this.height || 0);

		this.left = x;
		this.right = x + (this.width || 0);

		this.requestListenersUpdate();
	}

	public updateSize() {
		this.height = getViewportHeight();
		this.width = getViewportWidth();
		this.device = getDeviceType(this.width);

		this.requestListenersUpdate();
	}
}
