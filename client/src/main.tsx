import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/index.css';
import './styles/main.css';

import HomePage from './pages/HomePage.tsx';
import TaskPage from './pages/TaskPage.tsx';
import SignInPage from './pages/SignInPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/task/:taskId" element={<TaskPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
