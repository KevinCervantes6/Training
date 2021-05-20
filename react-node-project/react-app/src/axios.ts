import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create( {
    baseURL: `http://localhost:3500` 
});

instance.interceptors.request.use( (request: AxiosRequestConfig) => {
    request.headers['MyAuthenticationToke'] = 'AUTH0033'
    // console.log('Axios interceptors: ', request.url);
    return request;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use( (response: AxiosResponse) => {
    // console.log('Axios interceptors response: ', response.data);
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;