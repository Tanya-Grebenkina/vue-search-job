import axios from 'axios';

import type { RootObjet } from '@/api/types';

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  console.log(baseUrl);

  const url = `${baseUrl}`;
  const response = await axios.get<RootObjet>(url);
  console.log(response);
  console.log(response.data);

  return response.data.jobs;
};

export default getJobs;
