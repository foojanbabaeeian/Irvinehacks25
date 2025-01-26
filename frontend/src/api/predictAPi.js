export const predictPropertyPrice = async (preferences) => {
    const response = await fetch('http://localhost:5000/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(preferences),
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch predictions');
    }
  
    return await response.json();
  };
  