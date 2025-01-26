import './App.css';
import { HeroPage, PropertyPage, Dashboard } from './container';
import { NavBar, Quiz } from './component';
import React, { useEffect, useState } from 'react';
import { callApi } from './api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await callApi({ address: 'sample address' });
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
