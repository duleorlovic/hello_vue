import Vue from 'vue/dist/vue.esm'
import api from '../api'

export default {
  state: {
    // email: 'asd@asd.asd'
  },
  mutations: {
    SET_USER: (state, user) => {
      Vue.set(state, 'email', user.email)
    }
  },
  actions: {
    GET_USER: async (context) => {
      const response = await api.getUser();

      if (response.data) {
        context.commit('SET_USER', response.data)
      }

      return response
    },
  }
}
