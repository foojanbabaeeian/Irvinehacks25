import React from "react";
import "./HeroPage.css"
import houseImg from "../../assets/house_img.jpg"

const HeroPage = () => {
  return (
    <div className="HeroPage box__container flex__center">
      <div className="CallInAction-container">
        <button className="action-btn">
            <h2>START HERE</h2>
        </button>

        
      </div>

      <div className="About-container">
        <div className="content-container">
        <h2>About us</h2>
          <p>A comprehensive platform that helps users find affordable housing by leveraging Melissa's 
            APIs and AI to provide personalized housing recommendations and affordability insights.
          </p>
        </div>
        
      </div>

    </div>
  );
};

export default HeroPage;