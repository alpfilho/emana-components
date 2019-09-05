import React, { FunctionComponent, useEffect, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ScrollController: FunctionComponent<{} & RouteComponentProps> = ({
	children,
	location: { pathname }
}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollController);
