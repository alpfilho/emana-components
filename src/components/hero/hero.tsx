import React from 'react';
import { useHeaderValues } from '@hooks/useHeader';
import { HeroSection } from './hero.style';

export interface HeroI {
	className?: string;
	avoidHeader?: boolean;
}

export const Hero: React.FC<HeroI> = ({ children, className, avoidHeader }) => {
	const { height } = useHeaderValues();

	return (
		<HeroSection
			className={className}
			headerHeight={height}
			avoidHeader={avoidHeader}
		>
			{children}
		</HeroSection>
	);
};
