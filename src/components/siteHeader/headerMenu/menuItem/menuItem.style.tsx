import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const MiLi = styled.li`
	padding-left: 10px;
	padding-right: 10px;
	user-select: none;

	&:last-child {
		padding-right: 0;
	}
`;

export const MiLink = styled(HashLink)`
	display: block;
	padding: 5px;
	font-size: 16px;
	text-decoration: none;
	will-change: transform, opacity;
	font-weight: 700;

	color: inherit;
`;
