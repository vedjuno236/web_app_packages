import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Packages from './features/packages/packages';
import Bill from './features/bill/bill';
import './App.css';


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