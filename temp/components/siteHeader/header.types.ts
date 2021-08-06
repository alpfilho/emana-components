type linkT = { text: string; url: string };

export interface ElementsWithAddClassName {
	menuItem: string;
}

export interface ElementsWithAddStyle {
	background: any;
	content: any;
	menuItem: any;
}

export interface HeaderI {
	addClassNames: ElementsWithAddClassName;
	addStyles: ElementsWithAddStyle;
	links: Array<linkT>;
}

export interface MenuI {
	addClassNames: ElementsWithAddClassName;
	links: Array<linkT>;
}

export interface DesktopHeaderI extends HeaderI {}
