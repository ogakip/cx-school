import { student } from '../students/initialValues';

export const course = {
	title: '',
	description: '',
	duration: 1000,
};

export const initialValues = {
	courses: [course],
	courseStudents: [student],
	getAllCourses: async () => '',
	createCourse: async () => '',
	updateCourse: async () => '',
	deleteCourse: async () => '',
	listCourseStudents: async () => '',
};
