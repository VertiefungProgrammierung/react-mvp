import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import './styles/main.bundle.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);