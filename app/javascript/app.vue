<template>
  <div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click='toggleLoginType'>Toggle Loggin Type</button>
    <hr>

    Ask a yes/no question:
    <input type='text' v-model='question'>
    <br>
    <p>{{ answer }}</p>
    <hr>

    <form v-on:submit.prevent='addTodo'>
      <input v-model='newTodo' placeholder='New todo'>
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for='(todo, index) in todos'>
        {{ todo }}
        <button @click='removeTodo(index)'>Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      question: '',
      answer: 'I cannot give you an answer untill you ask a question!',

      loginType: 'username',

      newTodo: '',
      todos: ['first todo', 'second todo']
    }
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing'
      this.debounceGetAnswer()
    }
  },
  created: function() {
    this.debounceGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Question usually contain a question mark'
        return
      }
      this.answer = 'Thinking'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(error) {
          vm.answer = 'Error with API ' + error
        })
    },

    toggleLoginType: function(){
      if (this.loginType != 'username') {
        this.loginType = 'username'
      } else {
        this.loginType = ''
      }
    },

    addTodo: function() {
      this.todos.push(this.newTodo)
      this.newTodo = ''
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1)
    }
  }

}
</script>

<style scoped>
p {
}
</style>
