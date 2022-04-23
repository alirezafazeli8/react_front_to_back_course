import react from 'react';
import reactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

reactDOM.render(
	<react.StrictMode>
		<App />
	</react.StrictMode>,
	document.getElementById('root')
);
