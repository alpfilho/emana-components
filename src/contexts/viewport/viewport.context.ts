import React, { createContext } from 'react';
import { Viewport } from 'contexts/viewport/viewport.class';

const viewport = new Viewport();

export const context: React.Context<Viewport> = createContext(viewport);
