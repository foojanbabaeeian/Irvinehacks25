import './App.css';
import React from 'react';
import { HeroPage, PropertyPage, Dashboard } from './container';
import { NavBar } from './component';

const App = () => (
  <div>
    <NavBar/>

    <HeroPage/>
    <PropertyPage/>
    {/* <Dashboard/>  */}
    
  </div>
);

export default App;