import React, { FC, PropsWithChildren } from 'react';
import { ProviderProps } from '../interfaces/context';
import { StudentsProvider } from './students';

export const ContextProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	return <StudentsProvider>{children}</StudentsProvider>;
};
