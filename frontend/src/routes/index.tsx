import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Students } from '../pages/students-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Students/>,
	},
]);
