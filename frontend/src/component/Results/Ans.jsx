import React, { useEffect, useState } from 'react';

function Results() {
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('propertyAnalysis'));
    setPropertyData(data);
  }, []);

  return (
    <div>
      <h1>Property Analysis Results</h1>
      {propertyData ? (
        <div>
          <h2>Address: {propertyData.propertyDetails.Property.Address.Full}</h2>
          <p>Estimated Value: ${propertyData.propertyDetails.Property.EstimatedValue}</p>
          <p>Affordable: {propertyData.affordabilityAnalysis.affordable ? 'Yes' : 'No'}</p>
          <p>Affordability Score: {propertyData.affordabilityAnalysis.affordabilityScore}%</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default Results;
