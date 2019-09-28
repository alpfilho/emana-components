import styled from 'styled-components';
import { SitePage } from '../sitePage';
import { Container, Content } from '@components/contentContainer';

export const LoaderPage = styled(SitePage).attrs({
	paddingTop: 0
})<{ background?: string }>`
	background: ${({ background }) => (background ? background : 'none')};

	${Container} {
		height: 100%;
		${Content} {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			
			svg {
				width: 72px;
				height: auto;
			}
		}
	}
`;
