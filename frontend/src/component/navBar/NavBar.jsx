import React from "react";
import "./NavBar.css"
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <nav className="NavBar-wrapper">
        <div className="NavBar-logo">
            <FaHouseChimneyUser size={50}/>
            <h3>AffordaHome</h3>
        </div>


        <ul className="NavBar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/property">Property Page</a></li>
          <li><a href="/quiz">Take the Quiz</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>

        <div className="NavBar-user">
            <FaRegUserCircle size={40}/>
        </div>


      </nav>
    </div>
  );
};

export default NavBar;