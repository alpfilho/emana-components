import { Context } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface ScrollControllerProviderI extends RouteComponentProps {}

export interface ScrollControllerContextI {
	scrollTo: (y: number, animated?: boolean) => void;
}

export type ScrollControllerContextT = Context<ScrollControllerContextI | any>;
