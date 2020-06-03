import React, { useMemo, useState } from 'react';

import { LoadingContext } from '@contexts/loadingContext';

import { TopLoadingBar } from './topLoadingBar';

export const TopLoadingBarProvider: React.FC<{ color?: string }> = ({
	children,
	color = '#ccc'
}) => {
	const [isActive, setIsActive] = useState(false);

	const contextValue = useMemo(() => ({ isLoading: isActive, set: setIsActive }), [
		isActive,
		setIsActive
	]);

	return (
		<LoadingContext.Provider value={contextValue}>
			{children}
			<TopLoadingBar color={color} />
		</LoadingContext.Provider>
	);
};
