import { ValueReaction } from 'popmotion';
import { Context } from 'react';

export type DeviceT = 'mobile' | 'tablet' | 'desktop' | undefined;

export interface ViewportI {
	top: ValueReaction;
	left: ValueReaction;
	height: ValueReaction;
	width: ValueReaction;
}

export interface ViewportContextI {
	viewportValues: ViewportI;
	device: DeviceT;
}

export type ViewportContextT = Context<ViewportContextI | any>;
