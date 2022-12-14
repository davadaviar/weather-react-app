import React from 'react';
import { createRoot } from 'react-dom/client';
import WeatherApp from './components/WeatherApp';
import "./styles/index.css";

const root = createRoot(document.getElementById('root'));
root.render(<WeatherApp/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
