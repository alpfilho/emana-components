import React, {
	FunctionComponent,
	useLayoutEffect,
	useEffect,
	useRef
} from 'react';

import { value } from 'popmotion';

import {
	DkAnchor,
	DkBackground,
	DesktopHeader as DkHeader
} from './desktopHeader.style';
import { Container, Content } from '@components/contentContainer';

import {
	SiteHeaderControlRefI,
	SiteHeaderI
} from '@components/siteHeader/siteHeader.types';

import {
	checkIfIsFixed,
	initElement,
	getState,
	animateElement,
	stopAnimation
} from '@components/siteHeader/siteHeader.utils';
import { HeaderLogo } from '@components/siteHeader/headerLogo';
import { HeaderMenu } from '@components/siteHeader/headerMenu';
import { useHeaderValues, useViewportValues } from '@hooks';

export const DesktopHeader: FunctionComponent<SiteHeaderI> = ({
	additionalClassNames,
	additionalStyles,
	fixed,
	links,
	states,
	logo,
	paddingTop,
	paddingBottom,
	backgroundColor
}) => {
	const controlRef = useRef<SiteHeaderControlRefI>({
		isFixedValue: value(0),
		prevIsFixed: undefined,
		prevClientHeight: undefined
	});

	const { viewportValues, updateViewportValues } = useViewportValues();

	const dkHeaderRef = useRef<HTMLElement>(null);

	const dkBackgroundRef = useRef(null);
	const dkContentRef = useRef(null);
	const dkContainerRef = useRef(null);

	const { height } = useHeaderValues();

	/**
	 * Atualiza o tamanho do header no context
	 */
	useLayoutEffect(() => {
		if (
			dkHeaderRef.current &&
			controlRef.current.prevClientHeight !== dkHeaderRef.current.clientHeight
		) {
			height.update(dkHeaderRef.current.clientHeight);
			controlRef.current.prevClientHeight = dkHeaderRef.current.clientHeight;
		}
	});

	/**
	 * Inicializa os elementos
	 */
	useLayoutEffect(() => {
		if (fixed !== undefined && fixed !== false && states) {
			updateViewportValues();
			const { top } = viewportValues;
			const scrollY = top.get();
			const isFixedOnMount = checkIfIsFixed(scrollY, fixed);

			if (states.background) {
				initElement(
					dkBackgroundRef,
					getState(states, 'background', { isFixed: isFixedOnMount })
				);
			}

			if (states.container) {
				initElement(
					dkContainerRef,
					getState(states, 'container', { isFixed: isFixedOnMount })
				);
			}

			if (states.content) {
				initElement(
					dkContentRef,
					getState(states, 'content', { isFixed: isFixedOnMount })
				);
			}
		}
	}, []);

	/**
	 * Inscrição ao valor da viewport
	 */
	useEffect(() => {
		if (fixed && states) {
			const { top } = viewportValues;
			const scrollSubscription = top.subscribe((scrollY: number) => {
				const isFixedOnScroll = checkIfIsFixed(scrollY, fixed) ? 1 : 0;
				const prevIsFixedOnScroll = controlRef.current.prevIsFixed;

				if (
					prevIsFixedOnScroll !== undefined &&
					isFixedOnScroll !== prevIsFixedOnScroll
				) {
					controlRef.current.isFixedValue.update(isFixedOnScroll);
				}

				controlRef.current.prevIsFixed = isFixedOnScroll;
			});

			return () => {
				scrollSubscription.unsubscribe();
				stopAnimation(dkBackgroundRef);
				stopAnimation(dkContentRef);
				stopAnimation(dkContainerRef);
			};
		}
		return undefined;
	}, []);

	/**
	 * Animação ao Fixar
	 */
	useEffect(() => {
		if (fixed && states) {
			const isFixedSubscription = controlRef.current.isFixedValue.subscribe(
				(isFixedOnUpdate: number) => {
					/* Conversão de number para boolean */
					const isFixed = isFixedOnUpdate === 1;

					if (states.background) {
						animateElement(
							dkBackgroundRef,
							getState(states, 'background', { isFixed })
						);
					}

					if (states.container) {
						animateElement(
							dkContainerRef,
							getState(states, 'container', { isFixed })
						);
					}

					if (states.content) {
						animateElement(
							dkContentRef,
							getState(states, 'content', { isFixed })
						);
					}
				}
			);

			return () => {
				isFixedSubscription.unsubscribe();
				stopAnimation(dkBackgroundRef);
				stopAnimation(dkContentRef);
				stopAnimation(dkContainerRef);
			};
		}
		return undefined;
	}, []);

	return (
		<DkHeader ref={dkHeaderRef} fixed={fixed !== undefined && fixed !== false}>
			<DkAnchor paddingBottom={paddingBottom} paddingTop={paddingTop}>
				<Container ref={dkContainerRef}>
					<Content ref={dkContentRef}>
						<HeaderLogo
							logo={logo}
							states={states ? states.logo : undefined}
							fixed={fixed}
							headerRef={controlRef}
						/>
						<HeaderMenu
							links={links}
							additionalClassNames={additionalClassNames}
							additionalStyles={additionalStyles}
							states={states ? states.menu : undefined}
						/>
					</Content>
				</Container>
				<DkBackground ref={dkBackgroundRef} backgroundColor={backgroundColor} />
			</DkAnchor>
		</DkHeader>
	);
};
