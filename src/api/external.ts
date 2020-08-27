import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const externalApi = axios.create({
  baseURL: `http://API_URL`,
  //setup ngrok to redirect internally to localhost 3000
});

externalApi.interceptors.request.use(
  //Insert Token in requests
  async (config) => {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  //Error Handling
  (err) => {
    return Promise.reject(err);
  }
);

export default externalApi;
