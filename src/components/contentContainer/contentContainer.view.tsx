import * as React from 'react';
import './contentContainer.style.scss';
import clsx from 'clsx';

export const ContentContainer: React.FunctionComponent = (props) => {
	return (
		<div className={clsx(['content-container'])}>
			<div className="content">{props.children}</div>
		</div>
	);
};
