import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
			<Toaster position='top-center' reverseOrder={false} />
			<GlobalStyle/>
		</ContextProvider>
	</React.StrictMode>
);
reportWebVitals();
