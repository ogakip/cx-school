import React, { useContext } from 'react';
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { NavbarContext } from '../../../../context/navbar';

export const CloseBar = (): JSX.Element => {
	const { closeNavbar } = useContext(NavbarContext);

	return (
		<Container onClick={() => closeNavbar()}>
			<IoClose color='var(--text-color)' size='35px' />
		</Container>
	);
};
