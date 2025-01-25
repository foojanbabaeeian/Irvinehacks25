import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from 'react-icons/fa';





const SearchBar = ({setResults}) => {

  const [input, setInput] = useState("");

  const fetchData = (value) => {

    //usually send the value back in the backend with the url down here
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(json => {

        //no need to filtering the data in the front end [this is just the try out implement]
        // rendering the data so it can match the text we have inside the input data
        const results = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        });

        setResults(results)
    });
  }


  //everytime we change the text search, it will send the requestion to the API
  const handleChange = (value) =>{
    setInput(value)
    fetchData(value)
  }

  return (
    <div className="input-wrapper">
      <FaSearch id = "search-icon"/>
        <input 
          placeholder="Type to search..." 
          value ={input} 
          onChange={(e)=> handleChange(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;