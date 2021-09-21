import axios from 'axios';
import environment from './environment';

const instanceAxios = token => {
  const instance = axios.create({
    baseURL: environment,
  });

  instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  return instance;
};

export default instanceAxios;