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



import React, { useState } from 'react';
import "./AddressInput.css";
import { callApi } from '../../api';

function AddressInput() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('currentAddress', address);
    try {
      const result = await callApi(address);
      console.log('API response:', result);
    } catch (error) {
      setError('Failed to call API');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={address}
        onChange={handleChange}
        placeholder="Enter address"
      />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default AddressInput;