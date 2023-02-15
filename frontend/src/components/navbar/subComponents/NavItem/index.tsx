import React from 'react';
import { Container } from './styles';
import { NavbarItemProps } from '../../../../interfaces/components/navbar';
import { Link, useLocation } from 'react-router-dom';

export const NavItem = ({
	path,
	label,
	icon,
}: NavbarItemProps): JSX.Element => {
	const { pathname } = useLocation();

	return (
		<Container className={path === pathname ? 'navActive' : ''}>
			<abbr title={label || 'Navbar button'}>
				<Link to={path}>{icon}</Link>
			</abbr>
		</Container>
	);
};
