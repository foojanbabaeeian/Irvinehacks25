import React, { useEffect, useState } from 'react';
import './Ans.css';

function Recommendations() {
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    const storedRecommendations = localStorage.getItem('propertyData');
    if (storedRecommendations) {
      setRecommendations(JSON.parse(storedRecommendations));
    }
  }, []);

  return (
    <div className="AddressInput-container">
      <h1>Recommended Properties</h1>
      {recommendations ? (
        <div className="result-container">
          {recommendations.length > 0 ? (
            recommendations.map((property, index) => (
              <div key={index} className="property-card">
                <h3>{property.name || 'No Name Available'}</h3>
                <p>Location: {property.location || 'Unknown'}</p>
                <p>Price: ${property.price || 'N/A'}</p>
                <p>Bedrooms: {property.bedrooms || 'N/A'}</p>
                <p>Bathrooms: {property.bathrooms || 'N/A'}</p>
              </div>
            ))
          ) : (
            <p>No recommendations found based on your criteria.</p>
          )}
        </div>
      ) : (
        <p>Loading recommendations...</p>
      )}
    </div>
  );
}

export default Recommendations;
