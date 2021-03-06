/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from '../app.vue'

// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     render: h => h(App)
//   }).$mount()
//   document.body.appendChild(app.$el)

//   console.log(app)
// })


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


import Vue from 'vue/dist/vue.esm'
import _ from 'lodash'
_
import VueRouter from 'vue-router'
import VueNotification from 'vue-notification'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import TurbolinksAdapter from 'vue-turbolinks'

import 'stylesheet/application'
import router from '../router'
import store from '../store/index'

import AppComponent from '../components/app-component'

Vue.component('app-component', AppComponent)
Vue.use(TurbolinksAdapter)
Vue.use(VueRouter)
Vue.use(VueNotification)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById('hello')
  if (element != null) {
    const vue = new Vue({
      el: '#hello',
      data: {
        message: 'Welcome to hello_vue',
      },
      created(){
        this.$store.dispatch('GET_USER')
      },
      store,
      router
    })
    console.log('loading vue')
    vue
  }
  const globalVue = new Vue({
    el: '[data-behavior="vue"]',
  })
  globalVue
})
