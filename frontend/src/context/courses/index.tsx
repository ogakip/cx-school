import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ProviderProps } from '../../interfaces/context';
import {
	CourseContextProps,
	CourseProps,
	OptionalCourseProps,
} from '../../interfaces/context/courses';
import { StudentProps } from '../../interfaces/context/students';
import { API } from '../../services/api';
import { initialValues } from './initialValues';

export const CourseContext = createContext<CourseContextProps>(initialValues);

export const CourseProvider: FC<PropsWithChildren<ProviderProps>> = ({
	children,
}): JSX.Element => {
	const [courses, setCourses] = useState<CourseProps[]>([]);
	const [courseStudents, setCourseStudents] = useState<StudentProps[]>([]);

	const getAllCourses = async () => {
		await API.get('api/cursos')
			.then((res) => setCourses(res.data))
			.catch((err) =>
				toast.error(err.response.data.message || err.response.data.detail)
			);
	};

	const createCourse = async (data: CourseProps) => {
		await API.post('api/cursos/', data)
			.then(() => toast.success('Course created successfully'))
			.catch((err) =>
				toast.error(err.response.data.message || err.response.data.detail)
			);
	};

	const deleteCourse = async (course_id: number) => {
		await API.delete(`api/cursos/${course_id}`)
			.then((res) => toast.success('Course deleted successfully'))
			.catch((err) =>
				toast.error(err.response.data.message || err.response.data.detail)
			);
	};

	const updateCourse = async (data: OptionalCourseProps, course_id: number) => {
		await API.patch(`api/cursos/${course_id}`, data)
			.then(() => toast.success('Course updated successfully'))
			.catch((err) =>
				toast.error(err.response.data.message || err.response.data.detail)
			);
	};

	const listCourseStudents = async (course_id: number) => {
		await API.get(`api/cursos/${course_id}/alunos`)
			.then((res) => setCourseStudents(res.data))
			.catch((err) =>
				toast.error(err.response.data.message || err.response.data.detail)
			);
	};

	return (
		<CourseContext.Provider
			value={{
				courses,
				courseStudents,
				getAllCourses,
				createCourse,
				updateCourse,
				deleteCourse,
				listCourseStudents,
			}}
		>
			{children}
		</CourseContext.Provider>
	);
};
