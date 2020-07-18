import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import homeStore from './home-store'
import userStore from './user-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  // use strict mode to raise error when you change state without mutation
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    home: homeStore,
    user: userStore
  }
})

export default store
