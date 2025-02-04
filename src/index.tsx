import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProblemSelector from './ProblemSelector/ProblemSelector';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProblemSelector />
  </React.StrictMode>
);
