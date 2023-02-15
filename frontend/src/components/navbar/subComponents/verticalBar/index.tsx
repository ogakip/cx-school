import React, { useContext } from 'react';
import { CloseBar } from '../closeBar';
import { Container } from './styles';
import { ListNavItem } from '../listNavItems';
import { NavbarContext } from '../../../../context/navbar';

export const Verticalbar = (): JSX.Element => {
	const { isOpen } = useContext(NavbarContext);

	return (
		<Container className={isOpen ? 'open' : ''}>
			<CloseBar />
			<ListNavItem />
		</Container>
	);
};
