import { useCallback, useState, useRef, useEffect } from 'react';

export interface SlideControlsI {
	/**
	 * Slide ativo atual
	 */
	activeSlide: number;
	/**
	 * Callback para ir para o próximo slide
	 */
	goForward: () => void;
	/**
	 * Callback para ir para o slide anterior
	 */
	goBackwards: () => void;
	/**
	 * Callback para ir para um slide específico,
	 * usado geralmente em paginação
	 */
	goToSlide: (slide: number) => void;
}

export type useSliderControlsType = (
	slideLength: number,
	debounceTime?: number,
	autoPlay?: boolean,
	loopInterval?: number
) => SlideControlsI;

export const useSliderControls: useSliderControlsType = (
	slideLength,
	debounceTime = 400,
	autoPlay = true,
	loopInterval = 4000
) => {
	/** State reponsável por guardar a página atual */
	const [activeSlide, setActiveSlide] = useState(0);

	/** 1 - Próximo slide */
	const goForward = useCallback(() => {
		setActiveSlide((prevSlide) => {
			const nextSlide = prevSlide + 1;

			if (nextSlide > slideLength - 1) {
				return 0;
			}
			return nextSlide;
		});
	}, [slideLength]);

	/** 2 - Slide anterior */
	const goBackwards = useCallback(() => {
		setActiveSlide((prevSlide) => {
			const nextSlide = prevSlide - 1;

			if (nextSlide < 0) {
				return slideLength - 1;
			}
			return nextSlide;
		});
	}, [slideLength]);

	/** 3 - Vai para um slide específico (usado na paginação) */
	const goToSlide = useCallback((slide: number) => {
		setActiveSlide(slide);
	}, []);

	/** Objeto mutável que guarda variáveis do loop */
	const loopControlRef = useRef({
		timeoutID: 0,
		waitTime: loopInterval
	});

	/** Objeto mutável que guarda variáveis do debounce */
	const debounceControlRef = useRef({
		timerID: 0,
		isExecutingAnotherAction: false,
		waitTime: debounceTime
	});

	/** Remove os timeouts do debounce ao desmontar */
	useEffect(() => {
		const debounceControl = debounceControlRef.current;

		return (): void => {
			clearTimeout(debounceControl.timerID);
		};
	}, []);

	/** Função que faz o debounce */
	const debouncedAction = useCallback((action: (param: any) => void, param?): void => {
		const debounceControl = debounceControlRef.current;

		if (!debounceControl.isExecutingAnotherAction) {
			debounceControl.isExecutingAnotherAction = true;
			clearTimeout(debounceControl.timerID);
			action(param);
			debounceControl.timerID = setTimeout(() => {
				debounceControl.isExecutingAnotherAction = false;
			}, debounceControl.waitTime);
		}
	}, []);

	/** Debounced Actions */
	const debouncedGoToSlide = useCallback(
		(slide: number) => {
			debouncedAction(goToSlide, slide);
		},
		[goToSlide, debouncedAction]
	);

	const debouncedGoForward = useCallback(() => {
		debouncedAction(goForward);
	}, [debouncedAction, goForward]);

	const debouncedGoBackwards = useCallback(() => {
		debouncedAction(goBackwards);
	}, [debouncedAction, goBackwards]);

	/** 4 - startTimer */
	const startTimer = useCallback(() => {
		const loopControl = loopControlRef.current;

		/** Limpa o setInterval anterior */
		clearTimeout(loopControl.timeoutID);

		/* Inicia o "timer" */
		loopControl.timeoutID = setTimeout(() => {
			debouncedGoForward();
		}, loopControl.waitTime);
	}, [debouncedGoForward]);

	/** Ao montar, inicia o loop, ao desmontar, limpa o loop */
	useEffect(() => {
		if (autoPlay) {
			startTimer();
		}

		const loopControl = loopControlRef.current;

		return (): void => {
			clearTimeout(loopControl.timeoutID);
		};
	}, [activeSlide, startTimer, autoPlay]);

	return {
		activeSlide,
		setActiveSlide,
		goForward: debouncedGoForward,
		goBackwards: debouncedGoBackwards,
		goToSlide: debouncedGoToSlide
	};
};
