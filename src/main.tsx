import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './components/css/bootstrap-grid.css';
import './index.css'
import './components/css/Spinner.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
)
