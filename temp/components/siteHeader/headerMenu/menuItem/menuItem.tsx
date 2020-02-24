import React, { FunctionComponent } from 'react';

import { MiLi, MiLink } from './menuItem.style';

export const MenuItem: FunctionComponent<any> = ({
	link,
	text,
	className,
	additionalStyles
}) => {
	return (
		<MiLi className={className} additionalStyles={additionalStyles}>
			<MiLink to={link}>{text}</MiLink>
		</MiLi>
	);
};
