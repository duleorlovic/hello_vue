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
    handleSignUp () {
      api.signup({
        user: {
          email: this.email,
          password: this.password,
        }
      }).then(({data}) => {
        util.notice(`Successfully signed up: ${data.email}`)
        this.$store.commit('SET_USER', data)
        this.$router.push('/my-dash')
      }).catch((error) => {
        util.alert(`Sign up error: ${error.toString()} (probably email has been
        taken)`)
      })
    }
  }
}
</script>
<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent='handleSignUp'>
      <input type='email' v-model='email' placeholder='email'>
      <input type='password' v-model='password' placeholder='password'>
      <button type='submit'>Sign Up</button>
      <br>
      <router-link to='/log-in'>I already have an account</router-link>
    </form>
  </div>
</template>
