import axios from 'axios';

const API_KEY =
  'live_O9y0uE84R4bgAaO5VabevAEfvlQfRd0Zh8kzy1R9KxQsBiNUGfRQiiW9Qc39ndaX';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data[0];
  } catch (error) {
    throw error;
  }
}
