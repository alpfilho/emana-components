import { AnimatableElementsT, StatesProp, TransformProps } from './types';

export function getVariants(
	states: StatesProp | undefined,
	element: AnimatableElementsT,
	index?: number
) {
	if (states) {
		if (
			index !== undefined &&
			element === 'logo' &&
			states.default.logo &&
			states.fixed.logo
		) {
			return {
				default: states.default.logo[index],
				fixed: states.fixed.logo[index]
			};
		}
		if (states.default[element] && states.fixed[element]) {
			return {
				default: states.default[element],
				fixed: states.fixed[element]
			};
		}
	}
	return undefined;
}

export const transformTemplate = ({ y, x, scale }: TransformProps) => {
	let transform = '';

	if (y) {
		transform = transform.concat(` translateY(${y})`);
	}

	if (x) {
		transform = transform.concat(` translateX(${x})`);
	}

	if (scale) {
		transform = transform.concat(` scale(${scale})`);
	}

	return transform;
};
