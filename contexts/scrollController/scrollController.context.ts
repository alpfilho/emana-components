import { createContext } from 'react';
import { ScrollControllerContextT } from './scrollController.types';

export const ScrollControllerContext: ScrollControllerContextT = createContext(
	null
);
