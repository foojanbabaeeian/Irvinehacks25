const API_URL = 'http://localhost:5001';

export const callApi = async (address) => {
    try {
        const response = await fetch(`${API_URL}/api/endpoint`, {
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