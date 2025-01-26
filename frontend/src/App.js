import './App.css';
import { HeroPage, PropertyPage, Dashboard } from './container';
import { NavBar } from './component';
import React, { useEffect, useState } from 'react';
import { fetchBackendData } from './api';

const App = () => {
  const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchBackendData();
            setData(result);
        };

        getData();
    }, []);

    return (
      <div>
        <NavBar/>

        <HeroPage/>
        <PropertyPage/>
        {/* <Dashboard/>  */}
        
      </div>
    );
};

export default App;