import React, { RefObject, useRef } from 'react';
import { LogoPropI, FixedI, HeaderControlRef } from '../siteHeader.types';
import { LogoContainer, LogoInsideContainer } from './headerLogo.style';

// import { checkIfIsFixed, getState, initElement } from '../siteHeader.utils';

// import { useViewportValues } from '@hooks';

import { HashLink } from '../../hashLink';
import { warning } from 'hey-listen';

export interface HeaderLogoI {
	logo: LogoPropI;
	fixed: FixedI | false;
	headerRef: RefObject<HeaderControlRef>;
}

export const HeaderLogo: React.FC<HeaderLogoI> = ({
	logo
	// fixed,
	// headerRef
}) => {
	const defaultLogoRef = useRef(null);
	const fixedLogoRef = useRef(null);

	// const { viewportValues, updateViewportValues } = useViewportValues();

	/**
	 * Inicialização dos Elementos
	 */
	// useLayoutEffect(() => {
	// if (fixed) {
	// 	updateViewportValues();
	// 	const { top } = viewportValues;
	// 	const scrollY = top.get();
	// 	const isFixedOnMount = checkIfIsFixed(scrollY, fixed.triggerPoint);
	//
	// 	states.forEach((logoState, index) => {
	// 		if (controlRef.current.components) {
	// 			initElement(
	// 				controlRef.current.components[index],
	// 				getState(logoState, 'logo', { isFixed: isFixedOnMount })
	// 			);
	// 		}
	// 	});
	// } else {
	// }
	// }, []);

	/**
	 * Animação ao Fixar
	 */
	// useEffect(() => {
	// 	if (fixed && states && headerRef.current) {
	// 		const isFixedSubscription = headerRef.current.isFixedValue.subscribe(
	// 			(isFixedOnUpdate: number) => {
	// 				const isFixed = !!isFixedOnUpdate;
	//
	// 				if (Array.isArray(states)) {
	// 					states.forEach((logoState, index) => {
	// 						if (controlRef.current.components) {
	// 							animateElement(
	// 								controlRef.current.components[index],
	// 								getState(logoState, 'logo', { isFixed })
	// 							);
	// 						}
	// 					});
	// 				} else {
	// 					if (
	// 						states.default &&
	// 						states.fixed &&
	// 						controlRef.current.components
	// 					) {
	// 						animateElement(
	// 							controlRef.current.components[0],
	// 							getState(states, 'logo', { isFixed })
	// 						);
	// 					}
	// 				}
	// 			}
	// 		);
	//
	// 		return () => {
	// 			isFixedSubscription.unsubscribe();
	// 			controlRef.current.components.forEach((component) => {
	// 				stopAnimation(component);
	// 			});
	// 		};
	// 	}
	// 	return undefined;
	// }, []);

	const getLogoWidth = () => {
		if ()
		}

	const logoWidt = logo..;

	/* Caso seja uma logo só */
	if (logo.component) {
		if (React.isValidElement(logo.component)) {
			return (
				<HashLink to={logo.link}>
					<LogoContainer
						logoWidth={logo.width}
						logoAspectRatio={logo.aspectRatio}
					>
						<LogoInsideContainer ref={defaultLogoRef}>
							{logo.component}
						</LogoInsideContainer>
					</LogoContainer>
				</HashLink>
			);
			/* E caso seja uma logo para cada estado */
		} else if (
			React.isValidElement(logo.component.default) &&
			React.isValidElement(logo.component.fixed)
		) {
			return (
				<HashLink to={logo.link}>
					<LogoContainer
						logoWidth={logo.width}
						logoAspectRatio={logo.aspectRatio}
					>
						<LogoInsideContainer ref={defaultLogoRef}>
							{logo.component}
						</LogoInsideContainer>
						<LogoInsideContainer ref={fixedLogoRef}>
							{logo.component}
						</LogoInsideContainer>
					</LogoContainer>
				</HashLink>
			);
		} else {
			warning(false, 'Bad logo config');
		}
	}
	return null;
};
