import React from "react";
import "./PropertyPage.css"

import { SearchBar } from "../../component";

const PropertyPage = () => {
  return (
    <div className="PropertyPage box__container">
      {/* <h1 className="title">PropertyPage</h1> */}

      <div className="feature-Container">
        <div className="searchBar-container">
            <SearchBar/>
            <div>SearchBarResult</div>
        </div>

        {/* <div className="FilterOption">
            filter
        </div>

        <div className="DisplayResult">
            Result
        </div>     */}

      </div>

    </div>
  );
};

export default PropertyPage;