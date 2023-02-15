import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Courses } from '../pages/courses-page';
import { Students } from '../pages/students-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Students/>,
	},
	{
		path: '/cursos',
		element: <Courses/>
	}
]);
