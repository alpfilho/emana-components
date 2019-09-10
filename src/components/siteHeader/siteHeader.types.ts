import { ElementType } from 'react';
import { Styler } from 'stylefire';
import { LocationDescriptor } from 'history';
import { ColdSubscription, ValueReaction } from 'popmotion';
import { DefaultTheme, ThemedCssFunction } from 'styled-components';

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
	text: string;
	link: LocationDescriptor;
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

export type LogoElementStatesT = StateTypesI | Array<StateTypesI>;

// export type AnimatableElementsT =
// 	| 'background'
// 	| 'container'
// 	| 'content'
// 	| 'menu'
// 	| 'logo';

export interface StatesElementsI {
	background?: StateTypesI;
	container?: StateTypesI;
	content?: StateTypesI;
	menu?: StateTypesI;
	logo?: LogoElementStatesT;
}

export type FixedT = FixedI | boolean;
export type LogoT = LogoPropI;
export type LinksT = Array<LinkPropI>;
export type StatesT = StatesElementsI;

export interface AnimatedElement extends HTMLElement {
	styler: Styler;
	animation: ColdSubscription;
}

export interface SiteHeaderControlRefI {
	isFixedValue: ValueReaction;
	prevIsFixed: 0 | 1 | undefined;
	prevClientHeight: number | undefined;
}

export interface AdditionalClassNamesElementsI {
	menuItem?: string;
}

export type AdditionalStyleT = ThemedCssFunction<DefaultTheme>;

export interface AdditionalStylesI {
	menuItem?: AdditionalStyleT;
}

export interface SiteHeaderI {
	additionalClassNames?: AdditionalClassNamesElementsI;
	additionalStyles?: AdditionalStylesI;
	fixed?: FixedT;
	logo: LogoT;
	links: LinksT;
	states?: StatesT;
	paddingTop?: number;
	paddingBottom?: number;
	backgroundColor?: string;
}

export interface MenuItemI extends LinkPropI {
	className?: string;
	additionalStyles?: any;
}
