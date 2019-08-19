import React from 'react';
import PropTypes from 'prop-types';
import './contentContainer.style.scss';
import clsx from 'clsx';

const ContentContainer = ({ children, className }) => (
	<div className={clsx(['content-container', className])}>
		<div className="content">{children}</div>
	</div>
);

ContentContainer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

ContentContainer.defaultProps = {
	children: null,
	className: undefined
};

export default ContentContainer;
