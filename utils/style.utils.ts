export const mediaQuery = {
	screen: {
		maxWidth: function(screenSize: number) {
			return `@media screen and (max-width: ${screenSize}px)`;
		}
	}
};
