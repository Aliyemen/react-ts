import { notification } from 'antd';
import i18n from '../i18n/i18next';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import _ from 'lodash';
import { store } from 'store';
import { register } from 'store/action';

export const createApiService = (baseURL: '/api' ) => {
    const service = axios.create({
        baseURL: baseURL,
        timeout: 30000
    });

    service.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            config.headers['Content-Type'] = 'application/json';

            return config;
        },
        (error: any) => {
            return Promise.reject(error);
        }
    );

    service.interceptors.response.use(
        (response: AxiosResponse) => {
            return response.data;
        }, (error: any) => {
            if (error.response?.status === 401 && error.response?.data?.code !== 2030) {
                if (error.response?.config?.url === '/auth') {
                    notification.error({
                        message: 'Usuário ou senha incorreta',
                        placement: 'bottomLeft'
                    })
                } else if (error.response?.config?.url !== '/auth/logout') {
                    store.dispatch(register().logout());
                }
            }
            else if (error.response?.data?.code != null) {
                if (error.response.status === 400) {
                    if (error.response.data?.params != null) {
                        let newParams = error.response.data.params;
                        if (newParams != null) {
                            _.forEach(newParams, (value: any, i: any) => {
                                if (i18n.exists(`resource.error.fields.${value.toString().toLowerCase()}`))
                                    newParams[i] = i18n.t(`resource.error.fields.${value.toString().toLowerCase()}`);
                            })
                        }
                        notification.error({
                            message: i18n.t([
                                `resource.error.${error.response.data.code.toString()}.${error.response?.config?.url}`,
                                `resource.error.${error.response.data.code.toString()}.generic`
                            ], { ...newParams }),
                            placement: 'bottomLeft'
                        })
                    } else {
                        notification.error({
                            message: i18n.t([
                                `resource.error.${error.response.data.code.toString()}.${error.response?.config?.url}`,
                                `resource.error.${error.response.data.code.toString()}.generic`
                            ]),
                            placement: 'bottomLeft'
                        })
                    }
                }
                return Promise.reject(error);
            } else {
                notification.error({
                    message: i18n.t(`resource.error.1000.generic`),
                    placement: 'bottomLeft'
                })
            }
            return Promise.reject(error);
        }
    );

    return service;
}