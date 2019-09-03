import { ElementType } from 'react';
import { LocationDescriptor } from 'history';

export interface FixedI {
	triggerPoint: number;
}

export interface LogoPropI {
	component: ElementType | Array<ElementType>;
	aspectRatio: number;
	width: number;
	link: LocationDescriptor;
}

export interface LinkPropI {
	readonly text: string;
	readonly link: LocationDescriptor;
}

export interface AnimatablePropsI {
	transform?: string;
	opacity?: number;
	background?: string;
	color?: string;
}

export interface StateTypesI {
	default: AnimatablePropsI;
	fixed: AnimatablePropsI;
}

export interface StatesElementsI {
	background?: StateTypesI;
	contentContainer?: StateTypesI;
	content?: StateTypesI;
	menu?: StateTypesI;
	logo?: StateTypesI;
}

export type FixedT = FixedI | boolean;
export type LogoT = LogoPropI;
export type LinksT = Array<LinkPropI>;
export type StatesT = StatesElementsI;

export interface SiteHeaderI {
	fixed?: FixedT;
	logo: LogoT;
	links: LinksT;
	states?: StatesT;
}
