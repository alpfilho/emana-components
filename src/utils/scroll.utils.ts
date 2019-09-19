export const getScrollY = (): number => {
	return window.pageYOffset;
};

export const getScrollX = (): number => {
	return window.pageXOffset;
};

export const getElementScrollOffset = (element: HTMLElement): number => {
	return (
		element.getBoundingClientRect().top + document.documentElement.scrollTop
	);
};
