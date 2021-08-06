import { createContext, Dispatch } from 'react';

export const LoadingContext = createContext<{
	isLoading?: boolean;
	set?: Dispatch<boolean>;
}>({ isLoading: undefined, set: undefined });
