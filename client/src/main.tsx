import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/index.css';
import './styles/main.css';

import Home from './pages/Home.tsx';
import Task from './pages/Task.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:taskId" element={<Task />} />
      </Routes>
    </Router>
  </StrictMode>,
)
