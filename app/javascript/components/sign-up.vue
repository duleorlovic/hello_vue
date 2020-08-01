<template>
  <div>
    <h1>Sign up</h1>
    <div class='container'>
      <b-form @submit.prevent='handleSignUp'>
        <b-form-group>
          <b-form-input
            type='email'
            v-model.trim='$v.email.$model'
            placeholder='email'
            :state='validateState("email")'
            >
          </b-form-input>
          <b-form-invalid-feedback id='email-feedback'>Field is required</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group>
          <b-form-input
            type='password'
            v-model='$v.password.$model'
            placeholder='password'
            :state='validateState("password")'
          >
          </b-form-input>
          <b-form-invalid-feedback>password must have at least
            {{$v.password.$params.minLength.min}}
            letters.</b-form-invalid-feedback>
        </b-form-group>
        <b-button type='submit' variant='primary'>Sign Up</b-button>
      </b-form>
      <router-link to='/log-in'>I already have an account</router-link>
    </div>
  </div>
</template>
<script>
import api from '../api'
import util from '../util'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
    },
    password: {
      minLength: minLength(6)
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    },
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
        util.alert(`Sign up error: ${error.toString()}`)
      })
    }
  }
}
</script>
