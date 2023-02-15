import { Dispatch, SetStateAction } from 'react';

export interface NavbarProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface NavbarCloseProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface NavbarItemProps {
	path: string;
	label: string;
	icon: JSX.Element;
}
