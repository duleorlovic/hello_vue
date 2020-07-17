<template>
  <div>
    My Dash
    <router-link to='/my-dash/profile'>Go to profile</router-link>
    <router-link to='/my-dash/profile/me'>Go to profile/me</router-link>
    <router-link to='/my-dash/profile/team'>Go to profile/team</router-link>
    <router-link to='/my-dash/settings'>Go to Settings</router-link>
    <transition :name='transitionName'>
      <router-view class='child-view'></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
}
</script>
