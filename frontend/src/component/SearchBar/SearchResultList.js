import React from "react";
import "./SearchResultList.css"

import SearchResult from "./SearchResult";

const SearchResultList = ({results}) =>{
    return (
        <div className="results-list"> 
            {
                results.map((result, id) =>{
                    return <SearchResult result={result} key={id}/>;
                })
                
            }
        </div>
)};

export default SearchResultList