import axios from 'axios';
import { handleNetWorkErr, handleAuthErr, handleConfigureAuth } from './utils';
import apis from './api';

axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    handleAuthErr(response.data.errno);
    return response;
  },
  (err) => {
    handleNetWorkErr(err.response.status);
    return Promise.reject(err.response);
  },
);

axios.interceptors.request.use((config) => {
  handleConfigureAuth(config);
  return config;
});

const generateRequest = (apiStr) => {
  const options = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    url: apiStr,
  };
  const apiConfig = apiStr.split(' ');
  if (apiConfig.length === 2) {
    options.method = apiConfig[0];
    options.url = apiConfig[1];
  }
  return (payload) => {
    options.url.replace(/(?<=:)\w+(?=\/)/g, (str) => {
      return payload[str.slice(1)];
    });
    options[
      ['PUT', 'POST', 'PATCH', 'DELETE'].includes(
        options.method.toLocaleUpperCase(),
      )
        ? 'data'
        : 'params'
    ] = payload;
    return axios(options).then((response) => {
      console.log(response, 'response');
      return response;
    });
  };
};

export default new Proxy(apis, {
  get(t, p) {
    return generateRequest(t[p]);
  },
});
