<template>
  <div>
    My component
    {{ inputData }}
    <slot></slot>
    <button v-on:click='$emit("from-child", "sendToParent")'>Send to parent</button>
    <button class='button button-close'>B</button>
  </div>
</template>

<!-- Using CSS modules -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>

<script>
export default {
  data: function() {
    return {
      myData: 0
    }
  },
  methods: {
    sendToParent: function() {
      $emit('from-child', 'param from child')
    }
  },
  props: [
    'inputData'
  ]
}
</script>
