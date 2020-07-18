import Vue from 'vue/dist/vue.esm'

function alert(message, title = null) {
  Vue.notify({
    group: 'alert',
    type: 'error',
    title: title,
    text: message
  })
}

function notice(message, title = null) {
  Vue.notify({
    group: 'alert',
    type: 'notice',
    title: title,
    text: message
  })
}
export default {
  alert,
  notice
}
