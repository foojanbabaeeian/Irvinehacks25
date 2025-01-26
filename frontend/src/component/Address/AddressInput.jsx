// import React, { useState } from 'react';
// import "./AddressInput.css"


// function AddressInput() {
//   const [address, setAddress] = useState('');
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('currentAddress', address);
//     callApi(address);
//   };

//   const callApi = async (address) => {
//     try{
//       const response = await fetch(`http://localhost:5001/property?address=${address}`);
//       const result = await response.json();
//       localStorage.setItem('propertyData', JSON.stringify(result));
//       console.log(JSON.stringify(result))
      
//     } catch (err) {
//       setError('Issue retrieving address data. Try again');
//       console.log('ahhhh error')
//     }
//   };

//   return (
//     <div className="AddressInput-container">
//       <header className="AddressInput-wrapper">
//         <h1>Property Information Search</h1>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Property Address:
//             <input type="text" value={address} onChange={handleChange} required />
//           </label>
//           <button type="submit">Search</button>
//         </form>
//       </header>
//       {!error && (
//         <div>{error}</div>
//       )}
//     </div>
//   );
// }

// export default AddressInput;



import React, { useState } from "react";
import "./AddressInput.css";
import { callApi } from "../../api";

function AddressInput() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null); // State for storing the result

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setResult(null); // Clear previous result
    localStorage.setItem("currentAddress", address);
    try {
      const result = await callApi(address);
      console.log("API response:", result);
      setResult(result); // Save the result to state
      localStorage.setItem('propertyData', JSON.stringify(result));
    } catch (error) {
      setError("Failed to call API :333");
      console.error('Error:', error);

    }
  };

  return (
    <div className="AddressInput-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-container"
          type="text"
          value={address}
          onChange={handleChange}
          placeholder="Enter address"
        />
        <div className="submitBtn-container">
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
      {result && (
        <div className="result-container">
          <h2>Property Information:</h2>
          <pre><p>{JSON.stringify(result, null, 2)}</p></pre>
        </div>
      )}
    </div>
  );
}

export default AddressInput;

