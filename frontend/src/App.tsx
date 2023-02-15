import React, { useContext, useEffect } from 'react';
import { StudentsContext } from './context/students';

export const App = (): JSX.Element => {
	const { getAllStudents } = useContext(StudentsContext);

	useEffect(() => {
		getAllStudents();
	}, []);

	return <div></div>;
};
