import React, { useContext, useEffect } from 'react';
import { CourseContext } from './context/courses';
import { StudentsContext } from './context/students';

export const App = (): JSX.Element => {
	const {
		getAllCourses,
		createCourse,
		updateCourse,
		deleteCourse,
		listCourseStudents,
		courseStudents,
		courses,
	} = useContext(CourseContext);

	useEffect(() => {
		getAllCourses();
		createCourse({
			title: 'Um curso',
			description: 'Um curso legal',
			duration: 1000,
		});
		updateCourse(
			{
				title: 'Um curso atualizado',
			},
			4
		);
		deleteCourse(6);
		listCourseStudents(4);
	}, []);

	useEffect(() => {
		console.log(courses);
	}, [courses]);

	return <div></div>;
};
