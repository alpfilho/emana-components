import { createContext } from 'react';
import { ViewportContextT } from '@contexts/viewport/viewport.types';

export const ViewportContext: ViewportContextT = createContext(null);
