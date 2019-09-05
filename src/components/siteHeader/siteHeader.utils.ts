import {
	AnimatedElement,
	FixedT,
	AnimatablePropsI
} from '@components/siteHeader/siteHeader.types';
import { warning } from 'hey-listen';
import { RefObject } from 'react';
import { composite, spring, styler } from 'popmotion';

export const checkIfIsFixed = (scrollTop: number, fixed: FixedT): boolean => {
	if (fixed) {
		if (typeof fixed === 'object' && fixed.triggerPoint) {
			return scrollTop >= fixed.triggerPoint;
		} else {
			return scrollTop > 0;
		}
	} else {
		warning(false, 'getFixed() Chamado sem fixed estar configurado');
		return false;
	}
};

export const initElement = (
	elementRef: RefObject<AnimatedElement>,
	initialStyle: any
) => {
	if (elementRef.current) {
		elementRef.current.styler = styler(elementRef.current);
		elementRef.current.styler.set(initialStyle);
	}
};

export const stopAnimation = (elementRef: RefObject<AnimatedElement>) => {
	if (elementRef.current && elementRef.current.animation) {
		elementRef.current.animation.stop();
	}
};

export const animateElement = (
	elementRef: RefObject<AnimatedElement>,
	toState: AnimatablePropsI
) => {
	if (elementRef.current) {
		stopAnimation(elementRef);

		const properties = Object.keys(toState);
		const compositeMap = {};

		properties.forEach((propertie) => {
			if (elementRef.current) {
				compositeMap[propertie] = spring({
					from: elementRef.current.styler.get(propertie),
					to: toState[propertie],
					stiffness: 150,
					damping: 300,
					mass: 2
				});
			}
		});

		elementRef.current.animation = composite(compositeMap).start(
			(style: any) => {
				if (elementRef.current) {
					elementRef.current.styler.set(style);
				}
			}
		);
	}
};

export const getState = (
	states: any,
	element: any,
	{ isFixed }: { isFixed?: boolean }
) => {
	if (states) {
		/* tratamento do caso da logo */
		if (element === 'logo') {
			if (isFixed) {
				return states.fixed;
			}
			return states.default;
		}

		if (states[element]) {
			if (isFixed) {
				return states[element].fixed;
			}
			return states[element].default;
		} else {
			warning(false, `Nenhum state foi definido para: ${element}`);
		}
	} else {
		warning(false, 'States Vazio');
	}
	return {};
};
