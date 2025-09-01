import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Packages from './features/packages/packages';
import Bill from './features/bill/bill';
import Nonimage from './components/images/non_image';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Packages />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/Nonimage" element={<Nonimage />} />

      </Routes>
    </Router>
  );
};

export default App;