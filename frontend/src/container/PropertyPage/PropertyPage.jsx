import React, {useState} from "react";
import "./PropertyPage.css"

import { SearchBar } from "../../component";
import { SearchResultList } from "../../component";


const PropertyPage = () => {
  
  const [results, setResults] = useState([]);


  return (
    <div className="PropertyPage box__container">
      <h1 className="page-title">PropertyPage</h1>

      <div className="feature-Container">
        <div className="searchBar-container">
            <SearchBar setResults = {setResults}/>
            <SearchResultList results = {results}/>
        </div>

        <div className="FilterOption-container">
            <div className="score-container filter-btn">
              score
            </div>

            <div className="price-container filter-btn">
              price
            </div>

            <div className="location-container filter-btn">
              location
            </div>
        </div>

        {/* <div className="DisplayResult">
            Result
        </div>     */}

      </div>

    </div>
  );
};

export default PropertyPage;