import React, { useEffect, useContext } from 'react';
import { LoadingContext } from '@contexts/loadingContext';

export interface LoadingFallbackI {
	fallbackComponent: React.FunctionComponent;
}

export const LoadingFallback: React.FC<LoadingFallbackI> = ({ fallbackComponent }) => {
	const { set } = useContext(LoadingContext);

	useEffect(() => {
		if (set) {
			set(true);
		}

		return (): void => {
			if (set) {
				set(false);
			}
		};
	}, [set]);

	const Component = fallbackComponent;

	return <Component />;
};
