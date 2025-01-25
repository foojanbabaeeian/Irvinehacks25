import React, {useState} from "react";
import "./PropertyPage.css"

import { SearchBar } from "../../component";
import { SearchResultList } from "../../component";


const PropertyPage = () => {
  
  const [results, setResults] = useState([]);


  return (
    <div className="PropertyPage box__container">
      {/* <h1 className="title">PropertyPage</h1> */}

      <div className="feature-Container">
        <div className="searchBar-container">
            <SearchBar setResults = {setResults}/>
            <SearchResultList results = {results}/>
        </div>

        <div className="FilterOption">
            filter
        </div>

        {/* <div className="DisplayResult">
            Result
        </div>     */}

      </div>

    </div>
  );
};

export default PropertyPage;