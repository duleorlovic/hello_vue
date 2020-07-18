import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import homeStore from './home-store'
import userStore from './user-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home: homeStore,
    user: userStore
  }
})

export default store
