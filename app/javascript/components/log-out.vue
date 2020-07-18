<script>
import api from '../api'
import util from '../util'

export default {
  created () {
    api.logout().then(() => {
      util.notice('Successfully logged out')
      // this.$store.commit('REMOVE_USER')
      // this.$router.push('/')
      // we got ActionController::InvalidAuthenticityToken so better is to redirect
      window.location.href = "/"
    }).catch((error) => {
      util.alert(`Error: ${error.toString()}`)
    })
  }
}
</script>
<template>
  <div>Redirecting to root</div>
</template>
