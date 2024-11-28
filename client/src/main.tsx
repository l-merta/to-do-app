import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/index.css';
import './styles/main.css';

import HomePage from './pages/HomePage.tsx';
import TaskPage from './pages/TaskPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:taskId" element={<TaskPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
