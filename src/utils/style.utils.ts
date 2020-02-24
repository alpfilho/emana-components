export const mediaQuery = {
	screen: {
		maxWidth: function(screenSize: number): string {
			return `@media screen and (max-width: ${screenSize}px)`;
		}
	}
};
