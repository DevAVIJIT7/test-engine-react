import axios from 'axios';

const token = localStorage.getItem('token');

export const withoutToken = axios.create({
	baseURL: 'http://localhost:5000/api/v1'
});

export const withToken = axios.create({
	baseURL: 'http://localhost:5000/api/v1',
	headers: {Authorization: `Bearer ${token}`}
});