import axios from 'axios'
const http = axios.create({
  baseURL:'http://112.74.99.5:3000/web/api'
})
http.interceptors.request.use(function (config) {
  if(localStorage.getItem('token') && localStorage.getItem('id')){
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
export default http