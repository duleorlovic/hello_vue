export default {
  state: {
    count: 0,
    storeTodos: [
      { id: 1, text: 'first', done: true },
      { id: 2, text: 'second', done: false }
    ],
    vuexData: 'Initial vuex data',
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
}
