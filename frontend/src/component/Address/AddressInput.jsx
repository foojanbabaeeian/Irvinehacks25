import React, { useState } from "react";
import "./AddressInput.css";

function AddressInput() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null); // State for storing the result

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error
    localStorage.setItem("currentAddress", address);
    callApi(address);
  };

  const callApi = async (address) => {
    try {
      const response = await fetch(
        `http://localhost:5000/property?address=${address}`
      );
      const result = await response.json();
      localStorage.setItem("propertyData", JSON.stringify(result));
      setResult(result); // Save the result in state
      console.log(result);
    } catch (err) {
      setError("Issue retrieving address data. Try again");
      console.error(err);
    }
  };

  return (
    <div className="AddressInput-container">
      <header className="AddressInput-wrapper">
        <h1>Property Information Search</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Property Address:
            <input
              type="text"
              value={address}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </header>
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <h2>Property Details:</h2>
          {/* Customize how the result is displayed based on API response structure */}
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default AddressInput;
