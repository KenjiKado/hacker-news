import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	Method,
} from 'axios';
import { API } from '../constants/api';

interface IApiConfig {
	method: Method;
	url: string;
	contentType?: string;
	params?: { [key: string]: any }
	data?: { [key: string]: any };
	headers?: object;
	onSuccess?: (res: AxiosResponse) => void;
	onReject?: (error: AxiosError) => void;
}

const HTTP = axios.create();

export const callApi = async ({
	method,
	url,
	contentType = 'application/json',
	params,
	data,
	headers = {},
	onSuccess,
	onReject
}: IApiConfig) => {

	const config: AxiosRequestConfig = {
		url,
		method,
		params,
		data,
		headers: { ...headers, 'Content-Type': contentType },
	};

	return await HTTP(config).then((res: AxiosResponse) => {
		return res.data;
	}).then((res) => {
		onSuccess && onSuccess(res);
		return res;
	}).catch((err) => {
		onReject && onReject(err);
	})
};

export const getItemDetail = async (id: number) => {
	return await callApi({
		method: 'GET',
		url: `${API.STORY_DETAIL}${id}.json?print=pretty`
	})
};
