import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export const useDataApi = resource => {
  const [data, setData] = useState({ data: [], isFetching: false });
  const [endpointUrl] = useState(resource);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData({ ...data, isFetching: true });
        const response = await axios.get(endpointUrl);
        setData({
          data: response.data,
          isFetching: false,
        });
      } catch (e) {
        setData({ ...data, isFetching: false });
      }
    };

    fetchData();
  }, []);

  return [data];
};
