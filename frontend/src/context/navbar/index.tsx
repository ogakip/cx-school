import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import { ProviderProps } from '../../interfaces/context';
import { NavbarContextProps } from '../../interfaces/context/navbar';
import { InitialValues } from './initialValues';

export const NavbarContext =
	createContext<NavbarContextProps>(InitialValues);

export const NavbarProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const openNavbar = () => {
		setIsOpen(true);
	};

	const closeNavbar = () => {
		setIsOpen(false);
	};

	return (
		<NavbarContext.Provider value={{ isOpen, openNavbar, closeNavbar }}>
			{children}
		</NavbarContext.Provider>
	);
};
