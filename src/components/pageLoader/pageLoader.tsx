import React from 'react';

import { Hero } from '@components/hero';
import { ContentContainer } from '@components/contentContainer';
import { LoaderPage } from './pageLoader.style';
import { Spinner } from '@components/spinner/spinner';

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
