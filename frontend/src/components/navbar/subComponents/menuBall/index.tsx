import React, { useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { Container } from './styles';
import { NavbarContext } from '../../../../context/navbar';

export const Menuball = (): JSX.Element => {
	const { isOpen, openNavbar } = useContext(NavbarContext);

	return (
		<Container onClick={() => openNavbar()} className={!isOpen ? 'open' : ''}>
			<HiOutlineMenu size='35px' color='var(--text-color)' />
		</Container>
	);
};
