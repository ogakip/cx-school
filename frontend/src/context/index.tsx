import React, { FC, PropsWithChildren } from 'react';
import { ProviderProps } from '../interfaces/context';
import { StudentsProvider } from './students';
import { CourseProvider } from './courses';

export const ContextProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	return (
		<CourseProvider>
			<StudentsProvider>{children}</StudentsProvider>
		</CourseProvider>
	);
};
