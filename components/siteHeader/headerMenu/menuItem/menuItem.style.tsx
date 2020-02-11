import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const MiLink = styled(HashLink)`
	display: block;
	padding: 5px;
	text-decoration: none;
	will-change: transform, opacity;
`;

export const MiLi = styled('li')<{ additionalStyles?: any }>`
	padding-left: 10px;
	padding-right: 10px;
	user-select: none;
	font-size: 16px;

	&:last-child {
		padding-right: 0;
	}

	${(props) => (props.additionalStyles ? props.additionalStyles : undefined)}
`;
