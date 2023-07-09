import axios, { AxiosRequestConfig } from 'axios';
import { StorageService } from '@libraries';

interface RequestServiceConfig {
  useToken?: boolean;
}

export const RequestService = ((config?: RequestServiceConfig) => {
  const axiosConfig: AxiosRequestConfig = { baseURL: StorageService.get('api_url') as string };

  if (!config || typeof (config?.useToken) === 'boolean' && !config.useToken) {
    const token = StorageService.get('session_token');
    axiosConfig.headers = { Authorization: `Bearer ${token}` };
  }

  const axiosInstance = axios.create(axiosConfig);

  return {
    get: (async (url: string) => handleRequest(axiosInstance.get(url))),
    put: (async (url: string, data: any) => handleRequest(axiosInstance.put(url, data))),
    post: (async (url: string, data: any) => handleRequest(axiosInstance.post(url, data))),
    patch: (async (url: string, data: any) => handleRequest(axiosInstance.patch(url, data))),
    delete: (async (url: string) => handleRequest(axiosInstance.delete(url)))
  };
});


const handleRequest = (async (request: Promise<any>): Promise<any> => {
  return request
    .then(({ status, data }) => {
      const ext = Array.isArray(data) ? { data } : data;
      return { statusCode: status, ...ext };
    })
    .catch(({ response: { status, data } }) => { return { statusCode: status, ...data } });
});