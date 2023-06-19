import axios, { AxiosRequestConfig } from 'axios';
import { StorageService } from '@libraries';

interface RequestServiceConfig {
    useToken?: boolean;
}

export const RequestService = ((config?: RequestServiceConfig) => {
    const axiosConfig: AxiosRequestConfig = { baseURL: StorageService.get('API_URL') as string };

    if (!config || typeof (config?.useToken) === 'boolean' && !config.useToken) {
        const token = StorageService.get('SESSION_TOKEN');
        axiosConfig.headers = { Authorization: token };
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
        .then(({ status, data }) => { return { statusCode: status, ...data } })
        .catch(({ response: { status, data } }) => { return { statusCode: status, ...data } });
});