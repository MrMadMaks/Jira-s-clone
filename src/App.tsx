import React from 'react';
//import { TaskCard } from './containers/TaskCard';
import { Routes, Route } from 'react-router-dom';
import { ProjectsPage } from './pages/ProjectsPage';
import { CurrentProjectPage } from './pages/CurrentProjectPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProjectsPage />} />
      <Route path='/:projectTitle' element={<CurrentProjectPage />} />
    </Routes>
  );
}

export default App;
