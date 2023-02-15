import React from 'react';

import { Wrapper } from './styles';
import { Menuball } from './subComponents/menuBall';
import { Verticalbar } from './subComponents/verticalBar';

export const Navbar = (): JSX.Element => {
	return (
		<Wrapper>
			<Menuball />
			<Verticalbar />
		</Wrapper>
	);
};
