import React, { FC, PropsWithChildren } from 'react';
import { ProviderProps } from '../interfaces/context';
import { StudentsProvider } from './students';
import { CourseProvider } from './courses';
import { NavbarProvider } from './navbar';

export const ContextProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	return (
		<NavbarProvider>
			<CourseProvider>
				<StudentsProvider>{children}</StudentsProvider>
			</CourseProvider>
		</NavbarProvider>
	);
};
