import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Li = styled.li`
	padding-left: 10px;
	padding-right: 10px;
	user-select: none;

	&:last-child {
		padding-right: 0;
	}
`;

export const Link = styled(HashLink)`
	display: block;
	padding: 5px;
	font-size: 16px;
	text-decoration: none;
	will-change: transform, opacity;
	transition: transform 250ms ease, opacity 150ms ease;
	font-weight: 700;
	opacity: 0.9;
	transform: translate3d(0px, 0%, 0px);

	color: inherit;

	&:hover {
		opacity: 1;
		transform: translate3d(0px, -5%, 0px);
	}

	&:active {
		transition: transform 50ms ease, opacity 100ms ease;
		transform: translate3d(0px, 0%, 0px);
	}
`;
