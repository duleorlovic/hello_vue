<template>
  <div>
    <h2>App Component</h2>
    <slot name='header'>Some header title</slot>
    <div v-for='number in numbers' v-bind:key='number'>
      {{ number }}
    </div>
    <div>
      <slot>Default slot</slot>
    </div>
    <slot name='footer' v-bind:numbers1='numbers'>
      Some footer
      {{ numbers }}
    </slot>
  </div>
</template>
<script>
export default {
  props: ['numbers']
}
</script>
