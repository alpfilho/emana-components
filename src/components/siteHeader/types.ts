import { LocationDescriptor } from 'history';
import { ReactElement } from 'react';

export interface LinkProp {
	text: string;
	link: LocationDescriptor;
}

export interface LogoProp {
	component: Array<ReactElement> | ReactElement;
	link: LocationDescriptor;
	width: 272;
	aspectRatio: 3.113207547169811;
}

export interface ElementStylesI {
	x?: string | number;
	y?: string | number;
	background?: string;
	color?: string;
	opacity?: number;
}

export type AnimatableElementsT = 'content' | 'background' | 'logo';

export interface AnimatableElementsI {
	content?: ElementStylesI;
	background?: ElementStylesI;
	logo?: ElementStylesI | Array<ElementStylesI>;
}

export type StatesT = 'default' | 'fixed';

export interface StatesProp {
	default: AnimatableElementsI;
	fixed: AnimatableElementsI;
}

export interface HeaderProps {
	logo: LogoProp;
	links: Array<LinkProp>;
	states: StatesProp;
}

export interface TransformProps {
	x?: string | number;
	y?: string | number;
	scale?: string | number;
}
