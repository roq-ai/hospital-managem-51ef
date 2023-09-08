import axios from 'axios';
import queryString from 'query-string';
import { NewTabelHInterface, NewTabelHGetQueryInterface } from 'interfaces/new-tabel-h';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNewTabelHS = async (
  query?: NewTabelHGetQueryInterface,
): Promise<PaginatedInterface<NewTabelHInterface>> => {
  const response = await axios.get('/api/new-tabel-hs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNewTabelH = async (newTabelH: NewTabelHInterface) => {
  const response = await axios.post('/api/new-tabel-hs', newTabelH);
  return response.data;
};

export const updateNewTabelHById = async (id: string, newTabelH: NewTabelHInterface) => {
  const response = await axios.put(`/api/new-tabel-hs/${id}`, newTabelH);
  return response.data;
};

export const getNewTabelHById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/new-tabel-hs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNewTabelHById = async (id: string) => {
  const response = await axios.delete(`/api/new-tabel-hs/${id}`);
  return response.data;
};
