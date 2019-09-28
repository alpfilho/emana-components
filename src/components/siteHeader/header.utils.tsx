import { warning } from 'hey-listen';
import React from 'react';

import { composite, spring, styler } from 'popmotion';
import { Value } from 'popmotion/lib/reactions/value';

/**
 * Checa se o scroll passou do ponto de gatilho
 * @param scrollTop
 * @param triggerPoint
 */
export const checkIfIsFixed = (
	scrollTop: Value,
	triggerPoint: number
): boolean => {
	return scrollTop >= triggerPoint;
};

/**
 * Inicia um elemento com o styler e estilos iniciais
 * @param elementRef
 * @param initialStyle
 */
export const initElement = (elementRef: any, initialStyle: any) => {
	if (elementRef.current) {
		elementRef.current.styler = styler(elementRef.current);
		elementRef.current.styler.set(initialStyle);
	}
};

/**
 * Para um animação caso esteja em andamento
 * @param elementRef
 */
export const stopAnimation = (elementRef: any) => {
	if (elementRef.current && elementRef.current.animation) {
		elementRef.current.animation.stop();
	}
};

/**
 * Anima um elemento para o estado definido
 * @param elementRef
 * @param toState
 */
export const animateElement = (elementRef: any, toState: any) => {
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

/**
 * Pega o estado correto
 * @param states
 * @param element
 * @param isFixed
 */
export const getState = (
	states: any,
	element: string,
	{ isFixed }: { isFixed?: boolean }
) => {
	if (states) {
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

export const defaultProps = {
	addStyles: {
		background: undefined,
		menuItem: undefined
	},
	addClassNames: {
		menuItem: undefined
	},
	fixed: { triggerPoint: 16 },
	links: [
		{
			text: 'inicio',
			link: {
				pathname: '/'
			}
		},
		{
			text: 'sobre',
			link: {
				pathname: '/sobre'
			}
		}
	],
	logo: {
		component: <h1>Logo</h1>,
		aspectRatio: 1,
		width: 150,
		link: '/'
	},
	states: {
		background: undefined,
		container: undefined,
		content: undefined,
		logo: undefined,
		menu: undefined
	}
};
