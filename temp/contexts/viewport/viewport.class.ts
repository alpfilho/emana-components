import {
	getViewportHeight,
	getViewportWidth,
	getScrollX,
	getScrollY
} from '../../../src/utils';

import { ValueReaction, value } from 'popmotion';
import { ViewportI } from './viewport.types';

export class ViewportValues {
	top: ValueReaction;
	left: ValueReaction;
	height: ValueReaction;
	width: ValueReaction;

	constructor() {
		const { top, left } = this.getPosition();
		const { height, width } = this.getSize();

		this.top = value(top);
		this.left = value(left);
		this.height = value(height);
		this.width = value(width);
	}

	public get() {
		const viewport: ViewportI = {
			top: this.top,
			left: this.left,
			height: this.height,
			width: this.width
		};

		return viewport;
	}

	protected getPosition() {
		return {
			top: getScrollY() || 0,
			left: getScrollX() || 0
		};
	}

	public updatePosition() {
		const { top, left } = this.getPosition();

		this.top.update(top);
		this.left.update(left);
	}

	protected getSize() {
		return {
			height: getViewportHeight() || 0,
			width: getViewportWidth() || 0
		};
	}

	public updateSize() {
		const { height, width } = this.getSize();
		this.height.update(height);
		this.width.update(width);
	}
}
