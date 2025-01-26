import './App.css';
import { HeroPage, PropertyPage, Dashboard } from './container';
import { NavBar, Quiz, Recommendations } from './component';
import React, { useEffect, useState } from 'react';
import { callApi } from './api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await callApi('some address');
      setData(result);
    };

    getData();
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
