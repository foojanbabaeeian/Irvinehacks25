import React, { useState } from 'react';
import "./AddressInput.css"


function AddressInput() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('currentAddress', address);
    callApi(address);
  };

  const callApi = async (address) => {
    try{
      const response = await fetch(`http://localhost:5000/property?address=${address}`);
      const result = await response.json();
      localStorage.setItem('propertyData', JSON.stringify(result));
      console.log(JSON.stringify(result))
      
    } catch (err) {
      setError('Issue retrieving address data. Try again');
      console.log('ahhhh error')
    }
  };

  return (
    <div className="AddressInput-container">
      <header className="AddressInput-wrapper">
        <h1>Property Information Search</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Property Address:
            <input type="text" value={address} onChange={handleChange} required />
          </label>
          <button type="submit">Search</button>
        </form>
      </header>
      {!error && (
        <div>{error}</div>
      )}
    </div>
  );
}

export default AddressInput;