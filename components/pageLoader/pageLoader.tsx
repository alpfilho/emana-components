import React from 'react';

import { Hero } from '../hero';
import { ContentContainer } from '../contentContainer';
import { LoaderPage } from './pageLoader.style';
import { Spinner } from '../spinner/spinner';

export interface PageLoaderI {
	background?: string;
	className?: string;
}

export const PageLoader: React.FC<PageLoaderI> = ({
	className,
	background
}) => {
	return (
		<LoaderPage className={className} background={background}>
			<Hero>
				<ContentContainer>
					<Spinner />
				</ContentContainer>
			</Hero>
		</LoaderPage>
	);
};
