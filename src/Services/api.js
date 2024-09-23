import axios from 'axios'


const api = axios.create({baseURL:"https://fakestoreapi.com"});

api.interceptors.request.use(
    (res)=>res.data,
    (err)=>Promise.reject(err));
