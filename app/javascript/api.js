import axios from 'axios'

axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;

const BASE_PATH = '/api';

export default {
  // Auth
  getUser() {
    return axios.get(`${BASE_PATH}/user`)
  },
  login(payload) {
    return axios.post(`${BASE_PATH}/login`, payload)
  },
  logout() {
    return axios.delete(`${BASE_PATH}/logout`)
  },
  signup(payload) {
    return axios.post(`${BASE_PATH}/signup`, payload)
  },
  updateUser(payload) {
    return axios.put(`${BASE_PATH}/user`, payload)
  },
  // Posts
  getPosts() {
    return axios.get(`${BASE_PATH}/posts`)
  },
  deletePost(id) {
    return axios.delete(`${BASE_PATH}/posts/${id}`)
  },
  createPost(data) {
    return axios.post(`${BASE_PATH}/posts`, data)
  },
  updatePost(id, payload) {
    return axios.put(`${BASE_PATH}/posts/${id}`, payload)
  }
}
