import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { NavbarItemProps } from '../../interfaces/components/navbar';

export const navbarItems: NavbarItemProps[] = [
	{
		path: '/',
		label: 'Alunos',
		icon: <BsFillPeopleFill size='35px' color='var(--text-color)' />,
	},
	{
		path: '/cursos',
		label: 'Cursos',
		icon: <FaBook size='35px' color='var(--text-color)' />,
	},
];
