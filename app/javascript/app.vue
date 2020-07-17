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
    <hr>

    <button @click='say("hi", $event)'>Say hi</button>
    <br>
    <my-component
      :input-data='"param from parent"'
      v-on:from-child='onCallback'
    >My c</my-component>
    <hr>

    <div>
      state
      count={{ count }}
      doneTodosCount={{ doneTodosCount }}
      <button @click='incrementCount'>Increment count</button>
      <button @click='decrementCount'>Decrement count</button>
      <button @click='incrementAsync'>IncrementAsync</button>
      <button @click='actionB'>actionB</button>
      <button @click='changeCountWithoutMutation'>changeCountWithoutMutation</button>
      <br>
      {{ vuexData }}
      <input v-model='vuexData'>
      <hr>
      Transition
      <button @click=' show = !show '>Toggle</button>
      <transition name='trk'>
        <p v-if='show'>Hello</p>
      </transition>
      <transition
      >
        <p v-if='show'>Hello</p>
      </transition>
      <hr>
      <router-link to='/my-dash'>Open my Dash</router-link>
      <router-link to='/bar'>Open bar</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyComponent from 'components/my-component.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      question: '',
      answer: 'I cannot give you an answer untill you ask a question!',

      loginType: 'username',

      newTodo: '',
      todos: ['first todo', 'second todo'],
      show: false,
    }
  },
  computed: {
    ...mapState(['count', 'storeTodos']),
    ...mapGetters(['doneTodos', 'doneTodosCount']),
    vuexData: {
      get () {
        return this.$store.state.vuexData
      },
      set (value) {
        this.$store.commit('updateVuexData', value)
      }
    }
  },
  components: {MyComponent},
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
    },

    say: function(e, message) {
      alert(message)
    },

    onCallback: function(param) {
      alert(param)
    },

    ...mapMutations({
      incrementCount: 'increment',
      decrementCount: 'decrement',
    }),
    ...mapActions([
      'incrementAsync',
      'actionB',
      'changeCountWithoutMutation',
    ]),
  }

}
</script>

<style scoped>
p {
}
</style>
