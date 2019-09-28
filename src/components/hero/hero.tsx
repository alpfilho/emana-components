import React, { FunctionComponent } from 'react';
import { HeroSection } from '@components/hero/hero.style';
import { useAvoidHeader } from '@hooks';

export interface HeroI {
	backgroundImage?: string;
	className?: string;
	paddingTop?: number;
}

export const Hero: FunctionComponent<HeroI> = ({
	children,
	backgroundImage,
	className,
	paddingTop: paddingTopProp
}) => {
	const { paddingTop } = useAvoidHeader(paddingTopProp);

	return (
		<HeroSection
			className={className}
			backgroundImage={backgroundImage}
			paddingTop={paddingTop}
		>
			{children}
		</HeroSection>
	);
};
