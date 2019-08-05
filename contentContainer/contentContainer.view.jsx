import React from 'react';
import PropTypes from 'prop-types';
import './contentContainer.style.scss';
import objstr from 'obj-str';

const ContentContainer = ({ children, classNameObj }) => (
	<div className={objstr({ 'content-container': true, ...classNameObj })}>
		<div className="content">{children}</div>
	</div>
);

ContentContainer.propTypes = {
	children: PropTypes.node,
	classNameObj: PropTypes.object
};

ContentContainer.defaultProps = {
	children: null,
	classNameObj: undefined
};

export default ContentContainer;
