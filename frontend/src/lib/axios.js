import axios from 'axios';
export const axiosInstance=axios.create({
    baseurl: "http://localhost:7000/api",
    withCredentials: true,
})