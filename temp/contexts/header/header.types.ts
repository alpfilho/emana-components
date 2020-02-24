import { Context } from 'react';
import { ValueReaction } from 'popmotion';

export interface HeaderContextI {
	height: ValueReaction;

}

export type HeaderContextT = Context<HeaderContextI | any>;
