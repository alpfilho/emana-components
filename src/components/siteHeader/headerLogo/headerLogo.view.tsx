import React, {
	createRef,
	FunctionComponent,
	RefObject,
	useEffect,
	useLayoutEffect,
	useRef
} from 'react';
import {
	LogoPropI,
	LogoElementStatesT,
	FixedT,
	SiteHeaderControlRefI
} from '@components/siteHeader/siteHeader.types';
import { LogoContainer, LogoInsideContainer } from './headerLogo.style';
import {
	animateElement,
	checkIfIsFixed,
	getState,
	initElement,
	stopAnimation
} from '@components/siteHeader/siteHeader.utils';
import { useViewportValues } from '@hooks';
import { HashLink } from 'react-router-hash-link';

export interface HeaderLogoI {
	logo: LogoPropI;
	states?: LogoElementStatesT;
	fixed?: FixedT;
	headerRef: RefObject<SiteHeaderControlRefI>;
}

export const HeaderLogo: FunctionComponent<HeaderLogoI> = ({
	logo: logoConfig,
	states,
	fixed,
	headerRef
}) => {
	const controlRef = useRef<{ components: Array<any> }>({
		components: []
	});
	const { viewportValues, updateViewportValues } = useViewportValues();

	/**
	 * Inicialização dos Elementos
	 */
	useLayoutEffect(() => {
		if (fixed !== undefined && fixed !== false) {
			updateViewportValues();
			const { top } = viewportValues;
			const scrollY = top.get();
			const isFixedOnMount = checkIfIsFixed(scrollY, fixed);

			if (states && controlRef.current) {
				if (Array.isArray(states)) {
					states.forEach((logoState, index) => {
						if (controlRef.current.components) {
							initElement(
								controlRef.current.components[index],
								getState(logoState, 'logo', { isFixed: isFixedOnMount })
							);
						}
					});
				} else {
					if (states.default && states.fixed && controlRef.current.components) {
						initElement(
							controlRef.current.components[0],
							getState(states, 'logo', { isFixed: isFixedOnMount })
						);
					}
				}
			}

			if (headerRef.current) {
				headerRef.current.prevIsFixed = undefined;
			}
		}
	}, []);

	/**
	 * Animação ao Fixar
	 */
	useEffect(() => {
		if (fixed && states && headerRef.current) {
			const isFixedSubscription = headerRef.current.isFixedValue.subscribe(
				(isFixedOnUpdate: number) => {
					const isFixed = !!isFixedOnUpdate;

					if (Array.isArray(states)) {
						states.forEach((logoState, index) => {
							if (controlRef.current.components) {
								animateElement(
									controlRef.current.components[index],
									getState(logoState, 'logo', { isFixed })
								);
							}
						});
					} else {
						if (
							states.default &&
							states.fixed &&
							controlRef.current.components
						) {
							animateElement(
								controlRef.current.components[0],
								getState(states, 'logo', { isFixed })
							);
						}
					}
				}
			);

			return () => {
				isFixedSubscription.unsubscribe();
				controlRef.current.components.forEach((component) => {
					stopAnimation(component);
				});
			};
		}
		return undefined;
	}, []);

	/**
	 * A cada render refaz a array
	 */
	controlRef.current.components = [];

	/**
	 * Caso tenha um componente só, cria apenas um Ref
	 */
	if (!Array.isArray(logoConfig.component)) {
		controlRef.current.components.push(createRef());
	}

	return (
		<HashLink to={logoConfig.link}>
			<LogoContainer
				logoWidth={logoConfig.width}
				logoAspectRatio={logoConfig.aspectRatio}
			>
				{Array.isArray(logoConfig.component) ? (
					logoConfig.component.map((component, index) => {
						controlRef.current.components.push(createRef());

						return (
							<LogoInsideContainer
								key={index}
								ref={controlRef.current.components[index]}
							>
								{component}
							</LogoInsideContainer>
						);
					})
				) : (
					<LogoInsideContainer ref={controlRef.current.components[0]}>
						{logoConfig.component}
					</LogoInsideContainer>
				)}
			</LogoContainer>
		</HashLink>
	);
};
