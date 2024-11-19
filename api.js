import axios from 'axios';

const API_URL = 'http://localhost:5009/api'; // Replace with your server's URL and port

export const getShows = async () => {
  try {
    const response = await axios.get(`${API_URL}/shows`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

export const getShowById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching show with ID ${id}:`, error);
    throw error;
  }
};

export const createShow = async (showData) => {
  try {
    const response = await axios.post(`${API_URL}/shows`, showData);
    return response.data;
  } catch (error) {
    console.error('Error creating show:', error);
    throw error;
  }
};
