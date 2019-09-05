import React, { FunctionComponent } from 'react';
import { HeroSection } from '@components/hero/hero.style';

export interface HeroI {
	backgroundImage?: string;
}

export const Hero: FunctionComponent<HeroI> = ({
	children,
	backgroundImage
}) => {
	return (
		<HeroSection backgroundImage={backgroundImage}>{children}</HeroSection>
	);
};
