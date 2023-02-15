import React, { createContext, useState, FC, PropsWithChildren } from 'react';
import { ProviderProps } from '../../interfaces/context';
import {
	OptionalStudentProps,
	StudentProps,
	StudentsContextProps,
} from '../../interfaces/context/students';
import { initialValues, student } from './initialValues';
import { API } from '../../services/api';
import { toast } from 'react-hot-toast';

export const StudentsContext =
	createContext<StudentsContextProps>(initialValues);

export const StudentsProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	const [students, setStudents] = useState<StudentProps[]>([]);
	const [studentCourses, setStudentCourses] = useState([]);
	const [selectedStudent, setSelectedStudent] = useState<StudentProps>(student);

	const getAllStudents = async (): Promise<void> => {
		await API.get('api/alunos')
			.then((res) => setStudents(res.data))
			.catch((err) => console.error(err));
	};

	const createStudent = async (data: StudentProps): Promise<void> => {
		await API.post('api/alunos/', data)
			.then((res) => toast.success(res.data.message))
			.catch((err) => console.error(err));
	};

	const editStudent = async (
		data: OptionalStudentProps,
		student_id: number
	): Promise<void> => {
		await API.patch(`api/alunos/${student_id}`, data)
			.then(() => toast.success('Student successfully edited'))
			.catch((err) => toast.error(err.response.data.detail));
	};

	const deleteStudent = async (student_id: number): Promise<void> => {
		await API.delete(`api/alunos/${student_id}`)
			.then(() => toast.success('Student deleted successfully'))
			.catch((err) => toast.error(err.response.data.detail));
	};

	const getStudentCourses = async (student_id: number): Promise<void> => {
		await API.get(`api/alunos/${student_id}/cursos`)
			.then((res) => setStudentCourses(res.data))
			.catch((err) => console.error(err));
	};

	const selectCurrentStudent = async (student_id: number) => {
		await API.get(`api/alunos/${student_id}`)
			.then((res) => {
				setSelectedStudent(res.data);
				getStudentCourses(res.data.id);
			})
			.catch((err) => console.log(err));
	};

	const addStudentCourse = async (student_id: number, course_id: number) => {
		await API.patch(`api/alunos/adicionar-curso/${student_id}/${course_id}`)
			.then((res) => toast.success(res.data.message))
			.catch((err) =>
				toast.error(err.response.data.message || err.response.data.detail)
			);
	};

	return (
		<StudentsContext.Provider
			value={{
				students,
				studentCourses,
				selectedStudent,
				getAllStudents,
				createStudent,
				editStudent,
				deleteStudent,
				getStudentCourses,
				selectCurrentStudent,
				addStudentCourse,
			}}
		>
			{children}
		</StudentsContext.Provider>
	);
};
