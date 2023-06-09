import axios from 'axios';
import type { RootObjet } from '@/api/types';

const getDegrees = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}`;
  const response = await axios.get<RootObjet>(url);

  return response.data.degrees;
};

export default getDegrees;
