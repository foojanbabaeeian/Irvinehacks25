import './App.css';
import { HeroPage, PropertyPage, Dashboard } from './container';
import { NavBar } from './component';
import React, { useEffect, useState } from 'react';
import { callApi } from './api';

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
      <div>
        <NavBar/>

        <HeroPage/>
        <PropertyPage/>
        {/* <Dashboard/>  */}
        
      </div>
    );
};

export default App;