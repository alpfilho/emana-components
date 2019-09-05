import styled from 'styled-components';
import { Content, Container } from '@components/contentContainer';

export const SsSection = styled.section<{ paddingTop?: number }>`
	width: 100%;

	${Container} {
		${Content} {
			padding-top: ${({ paddingTop }) => paddingTop || 92}px;
		}
	}
`;
