import { Context } from 'react';

export interface ScrollControllerContextI {
	scrollTo?: (y: number, animated?: boolean) => void;
}

export type ScrollControllerContextT = Context<ScrollControllerContextI>;
