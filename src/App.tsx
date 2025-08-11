import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Packages from './view/packages';
import Bill from './bill/bill';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Packages />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </Router>
  );
};

export default App;