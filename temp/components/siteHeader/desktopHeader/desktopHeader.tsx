import React, { useRef } from 'react';

import { Container, Content } from '../../contentContainer';
import { HeaderMenu } from '../headerMenu';

/**
 * Types
 */
import { DesktopHeaderI } from '../header.types';

import {
	DesktopHeader as DkHeader,
	DkAnchor,
	DkBackground
} from './desktopHeader.style';

// const normalizeProp = (propName: string, prop: any) => {
// 	switch (propName) {
// 		case 'addStyles': {
// 			/**
// 			 * Aplica a prop em cima dos defaults
// 			 */
// 			return Object.assign({}, defaultProps.addStyles, prop);
// 		}
// 		case 'addClassNames': {
// 			/**
// 			 * Aplica a prop em cima dos defaults
// 			 */
// 			return Object.assign({}, defaultProps.addClassNames, prop);
// 		}
// 		case 'fixed': {
// 			/**
// 			 * A prop fixed pode ser um booleano,
// 			 * caso não seja fixo, apenas retorna falso;
// 			 */
// 			if (prop === false || prop === null || prop === undefined) {
// 				return false;
// 			} else if (prop === true) {
// 				return defaultProps.fixed;
// 			} else if (typeof prop === 'object' && prop.triggerPoint) {
// 				return prop;
// 			}
// 			return false;
// 		}
// 		case 'logo': {
// 		}
//
// 		default: {
// 			return prop;
// 		}
// 	}
// };

/**
 * Desktop Header é um Header com Logo, Conteúdo e Menu
 */
export const DesktopHeader: React.FC<DesktopHeaderI> = ({
	addClassNames: addClassNamesProp,
	addStyles: addStylesProp,
	// fixed: fixedProp,
	links: linksProp
	// states: statesProp,
	// logo: logoProp
}) => {
	/* Normalização */
	// const addClassNames = normalizeProp('addClassNames', addClassNamesProp);
	// const additionalStyles = normalizeProp('addStyles', addStylesProp);
	// const fixed = normalizeProp('fixed', fixedProp);
	// const logo = normalizeProp('logo', logoProp);

	/* Refs dos componentes animaveis */
	const HeaderRef = useRef(null);
	const BackgroundRef = useRef(null);
	const ContentRef = useRef(null);
	const ContainerRef = useRef(null);

	/* Atualiza o context do header com o tamano atual do header */
	// useUpdateHeaderHeight(HeaderRef);

	/* Inicializa controlRef padrão */
	// const controlRef = useHeaderControlRef();

	/* Viewport Values */
	// const { viewportValues, updateViewportValues } = useViewportValues();

	/**
	 * Inicializa os elementos
	 */
	// useLayoutEffect(() => {
	/**
	 * Caso seja um header que alterna entre os estados default e fixo,
	 * preciso inicializar os elementos que farão a as animações
	 */
	// if (fixed && statesProp) {
	/* Atualizo os valores da viewport */
	// updateViewportValues();

	/* Valores da viewport */
	// const { top } = viewportValues;
	// const scrollY = top.get();

	/* Checa se está fixo */
	// const isFixedOnMount = checkIfIsFixed(scrollY, fixed.triggerPoint);

	// 		if (statesProp.background) {
	// 			initElement(
	// 				BackgroundRef,
	// 				getState(statesProp, 'background', { isFixed: isFixedOnMount })
	// 			);
	// 		}
	//
	// 		if (statesProp.container) {
	// 			initElement(
	// 				ContainerRef,
	// 				getState(statesProp, 'container', { isFixed: isFixedOnMount })
	// 			);
	// 		}
	//
	// 		if (statesProp.content) {
	// 			initElement(
	// 				ContentRef,
	// 				getState(statesProp, 'content', { isFixed: isFixedOnMount })
	// 			);
	// 		}
	// 	}
	// }, []);

	/**
	 * Inscrição ao valor da viewport
	 */
	// useEffect(() => {
	// 	if (fixed && statesProp) {
	// 		const { top } = viewportValues;
	// 		const scrollSubscription = top.subscribe((scrollY: number) => {
	// 			const isFixedOnScroll = checkIfIsFixed(scrollY, fixed.triggerPoint)
	// 				? 1
	// 				: 0;
	// 			const prevIsFixedOnScroll = controlRef.current.prevIsFixed;
	//
	// 			if (isFixedOnScroll !== prevIsFixedOnScroll) {
	// 				controlRef.current.isFixedValue.update(isFixedOnScroll);
	// 			}
	//
	// 			controlRef.current.prevIsFixed = isFixedOnScroll;
	// 		});
	//
	// 		return () => {
	// 			scrollSubscription.unsubscribe();
	// 			stopAnimation(BackgroundRef);
	// 			stopAnimation(ContentRef);
	// 			stopAnimation(ContainerRef);
	// 		};
	// 	}
	// 	return undefined;
	// }, []);

	/**
	 * Animação ao Fixar
	 */
	// useEffect(() => {
	// 	if (fixed && statesProp) {
	// 		const isFixedSubscription = controlRef.current.isFixedValue.subscribe(
	// 			(isFixedOnUpdate: number) => {
	// 				/* Conversão de number para boolean */
	// 				const isFixed = isFixedOnUpdate === 1;
	//
	// 				if (statesProp.background) {
	// 					animateElement(
	// 						BackgroundRef,
	// 						getState(statesProp, 'background', { isFixed })
	// 					);
	// 				}
	//
	// 				if (statesProp.container) {
	// 					animateElement(
	// 						ContainerRef,
	// 						getState(statesProp, 'container', { isFixed })
	// 					);
	// 				}
	//
	// 				if (statesProp.content) {
	// 					animateElement(
	// 						ContentRef,
	// 						getState(statesProp, 'content', { isFixed })
	// 					);
	// 				}
	// 			}
	// 		);
	//
	// 		return () => {
	// 			isFixedSubscription.unsubscribe();
	// 			stopAnimation(BackgroundRef);
	// 			stopAnimation(ContentRef);
	// 			stopAnimation(ContainerRef);
	// 		};
	// 	}
	// 	return undefined;
	// }, []);

	return (
		<DkHeader ref={HeaderRef} fixed={false}>
			<DkAnchor addStylesProp={{  }}>
				<Container ref={ContainerRef}>
					<Content ref={ContentRef}>
						{/*<HeaderLogo headerRef={controlRef} logo={logo} fixed={fixed} />*/}

						<HeaderMenu
							links={linksProp}
							addClassNames={addClassNamesProp}
							// additionalStyles={additionalStyles}
						/>
					</Content>
				</Container>
				<DkBackground ref={BackgroundRef} additionalStyles={undefined} />
			</DkAnchor>
		</DkHeader>
	);
};
