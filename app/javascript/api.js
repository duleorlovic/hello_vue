import axios from 'axios'

const BASE_PATH = '/api';

export default {
  // Auth
  getUser() {
    return axios.get(`${BASE_PATH}/user`)
  },
  updateUser(payload) {
    return axios.put(`${BASE_PATH}/user`, payload)
  },
  signup(payload) {
    return axios.post(`${BASE_PATH}/signup`, payload)
  },
  login(payload) {
    return axios.post(`${BASE_PATH}/login`, payload)
  },
  logout() {
    return axios.delete(`${BASE_PATH}/logout`)
  }
}
