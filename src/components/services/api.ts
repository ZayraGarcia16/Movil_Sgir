import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tu-api-colombia.com/v1',
  timeout: 10000,
});

export const fetchTours = async () => {
  const response = await api.get('/tours');
  return response.data;
};

export const fetchHotels = async (region: string) => {
  const response = await api.get(`/hotels?region=${region}`);
  return response.data;
};
