import axios from 'axios';

// Define the baseURL and API KEY used on every requests.
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export const getFromApi = endpointUrl => {
  return axios.get(endpointUrl);
};
