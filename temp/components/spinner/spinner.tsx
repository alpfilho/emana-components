import React from 'react';
import { SpinnerSvg } from './spinner.style';

export const Spinner = () => (
	<SpinnerSvg viewBox="0 0 50 50">
		<circle
			className="path"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			strokeWidth="4"
		/>
	</SpinnerSvg>
);
