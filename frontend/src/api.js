const API_URL = 'http://localhost:5001';

export const callApi = async (address) => {
    try {
        const response = await fetch(`${API_URL}/api/housing/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }
};

export const fetchPropertyData = async (address) => {
    try {
        const response = await fetch(`${API_URL}/api/housing/data?address=${encodeURIComponent(address)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching property data:', error);
        throw error;
    }
};

export const predictPropertyPrice = async (features) => {
    try {
        const response = await fetch(`${API_URL}/api/svm/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ features }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error predicting price:', error);
        throw error;
    }
};