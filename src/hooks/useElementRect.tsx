import React, {
	createContext,
	MutableRefObject,
	useCallback,
	useContext,
	useLayoutEffect,
	useMemo,
	useState
} from 'react';
import { getElementRect } from '@utils/style.utils';

interface ElementsPropsContextI {
	elements: { [key: string]: ElementI };
	setElement: (elementKey: string, props: elementProps) => void;
}

/**
 * Context necessário para guardar as refs
 */
export const elementsRectContext = createContext<ElementsPropsContextI>({
	elements: {},
	setElement: () => ({})
});

type elementProps = { width?: number; height?: number };

export interface ElementI {
	width: number;
	height: number;
}

/**
 * Provider interno
 */
const InternalProvider = elementsRectContext.Provider;

export const ElementsRectContextProvider: React.FC = ({ children }) => {
	const [elements, setElements] = useState<{ [key: string]: ElementI }>({});

	const setElement = useCallback(
		(elementKey, props) => {
			const element = elements[elementKey];
			setElements((prevState) => {
				const tmpState = prevState;
				tmpState[elementKey] = Object.assign(element || {}, props);
				return tmpState;
			});
		},
		[elements]
	);

	const contextValue = useMemo(
		() => ({
			elements,
			setElement
		}),
		[elements, setElement]
	);

	return <InternalProvider value={contextValue}>{children}</InternalProvider>;
};

/**
 * Hook que guarda e atualiza o rect de elementos globalmente.
 * @param elementKey
 */
export const useElementRect = (elementKey: string): ElementI => {
	const { elements } = useContext(elementsRectContext);
	const element = elements[elementKey];
	return useMemo(
		() => ({
			width: element?.width || 0,
			height: element?.height || 0
		}),
		[element]
	);
};

export const useElementRectUpdate = (
	elementKey: string,
	elementRef: MutableRefObject<HTMLElement>
): void => {
	const { setElement } = useContext(elementsRectContext);

	const setRect = useCallback(
		(props: elementProps) => {
			setElement(elementKey, props);
		},
		[setElement, elementKey]
	);

	useLayoutEffect(() => {
		const element = elementRef.current;
		const { width, height } = getElementRect(element);
		setRect({ width, height });
	}, [elementRef, setRect]);
};
