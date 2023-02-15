import React, { createContext, useState, FC, PropsWithChildren } from 'react';
import { ProviderProps } from '../../interfaces/context';
import { StudentProps, StudentsContextProps } from '../../interfaces/context/students';
import { initialValues } from './initialValues';
import { API } from '../../services/api';

export const StudentsContext = createContext<StudentsContextProps>(initialValues);

export const StudentsProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	const [students, setStudents] = useState<StudentProps[]>([]);

	const getAllStudents = async () => {
		await API.get('api/alunos')
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	};

	return (
		<StudentsContext.Provider value={{ students, getAllStudents }}>
			{children}
		</StudentsContext.Provider>
	);
};
