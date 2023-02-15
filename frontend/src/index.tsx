import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ContextProvider>
			<Toaster position='top-center' reverseOrder={false} />
			<App />
		</ContextProvider>
	</React.StrictMode>
);
reportWebVitals();
