import React, { Fragment } from 'react';
import { LogoProp, StatesProp } from '../../../../types';
import { LogoInsideContainer } from './desktopHeaderLogo.style';
import { getVariants, transformTemplate } from '../../../../helpers';

export interface DesktopHeaderLogoProps {
	logo: LogoProp;
	states?: StatesProp;
}

export const DesktopHeaderLogo: React.FunctionComponent<
	DesktopHeaderLogoProps
> = ({ logo, states }) => {
	if (Array.isArray(logo.component)) {
		return (
			<Fragment>
				{logo.component.map((logoComponent, index) => (
					<LogoInsideContainer
						key={index}
						variants={getVariants(states, 'logo', index)}
						transformTemplate={transformTemplate}
					>
						{logoComponent}
					</LogoInsideContainer>
				))}
			</Fragment>
		);
	}

	if (logo.component) {
		return (
			<LogoInsideContainer
				variants={getVariants(states, 'logo')}
				transformTemplate={transformTemplate}
			>
				{logo.component}
			</LogoInsideContainer>
		);
	}

	return null;
};
