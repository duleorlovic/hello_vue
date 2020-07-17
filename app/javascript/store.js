import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    storeTodos: [
      { id: 1, text: 'first', done: true },
      { id: 2, text: 'second', done: false }
    ],
    vuexData: 'Initial vuex data',
    user: {}
  },
  getters: {
    doneTodos: state => {
      return state.storeTodos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    updateVuexData (state, value) {
      state.vuexData = value
    }
  },
  actions: {
    incrementAsync (context) {
      setTimeout(function() {
        context.commit('increment')
      }, 1000)
    },
    actionA ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      dispatch('actionA').then(() => {
        commit('increment')
      })
    },

    changeCountWithoutMutation ({ state }) {
      state.count += 1
    }
  }
})

export default store
