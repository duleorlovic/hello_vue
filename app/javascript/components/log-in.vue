<script>
import api from '../api'
import util from '../util'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      api.login({
        user: {
          email: this.email,
          password: this.password
        }
      }).then(({data}) => {
        util.notice(`Successfully logged in: ${data.email}`)
        this.$store.commit('SET_USER', data)
        this.$router.push('/my-dash')
      }).catch((error) => {
        util.alert(`Log in error: ${error.toString()}`)
      })
    }
  }
}
</script>
<template>
  <div>
    <h1>Please log in</h1>
    <form @submit.prevent='handleSubmit'>
      <input type='email' v-model='email' placeholder='Email'>
      <input type='password' v-model='password' placeholder='Password'>
      <button type='submit'>Log in</button>
      <br>
      <router-link to='/sign-up'>Create an account</router-link>
    </form>
  </div>
</template>

