import React, {useState} from "react";
import "./PropertyPage.css"

import { SearchBar } from "../../component";
import { SearchResultList } from "../../component";

import {AddressInput} from "../../component"

const PropertyPage = () => {
  
  const [results, setResults] = useState([]);


  return (
    <div className="PropertyPage box__container" id="PropertyPage">
      <h1 className="page-title">PropertyPage</h1>

      <div className="feature-Container">
        {/* <div className="searchBar-container">
            <SearchBar setResults = {setResults}/>
            <SearchResultList results = {results}/>
        </div> */}

        <AddressInput/>

        {/* <div className="FilterOption-container">
            <div className="score-container filter-btn">
              <p>score</p>
            </div>

            <div className="price-container filter-btn">
              <p>price</p>
            </div>

            <div className="location-container filter-btn">
              <p>location</p>
            </div>
        </div> */}

        {/* <div className="DisplayResult">
            Result
        </div>     */}

      </div>

    </div>
  );
};

export default PropertyPage;