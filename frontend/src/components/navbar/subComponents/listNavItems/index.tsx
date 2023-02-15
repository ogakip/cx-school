import React from 'react';
import { Container } from './styles';
import { navbarItems } from '../../navbarItems';
import { NavItem } from '../NavItem';

export const ListNavItem = () => {
	return (
		<Container>
			{navbarItems?.map((item, index) => {
				return (
					<NavItem
						key={index}
						path={item.path}
						icon={item.icon}
						label={item.label}
					/>
				);
			})}
		</Container>
	);
};
