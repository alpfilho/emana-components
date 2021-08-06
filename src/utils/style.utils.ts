export const mediaQuery = {
	screen: {
		maxWidth: function(screenSize: number): string {
			return `@media screen and (max-width: ${screenSize}px)`;
		}
	}
};

export const getElementRect = (
	element: HTMLElement
): { top: number; left: number; width: number; height: number } => {
	const { width, height, left, top } = element.getBoundingClientRect();

	return {
		top,
		left,
		width,
		height
	};
};
