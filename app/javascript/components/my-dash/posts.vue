<template>
  <div>
    <h1>Posts</h1>
    <div v-if='posts'>
      <div v-for='post in posts' :key='post.id'>
        <b>id</b>
        {{ post.id }}
        <b>title</b>
        {{ post.title }}
        <b>content</b>
        {{ post.content }}
        <b>created_at</b>
        {{ post.created_at }}
        <button @click.prevent='handleDelete(post)'>Delete</button>
        <button @click.prevent='showUpdatePost(post)'>Update</button>
      </div>
    </div>
    <div v-else>
      Loading posts...
    </div>
    <form @submit.prevent='handleCreatePost'>
      <input type='text' v-model='new_title' placeholder='Title'>
      <button type='submit'>Create</button>
    </form>
    <form @submit.prevent='handleUpdatePost' v-if='post_to_update'>
      <input type='text'
             v-model='update_title'
             placeholder='Title'
             ref='new-title'
       >
      <button type='submit'>Update</button>
    </form>
  </div>
</template>
<script>
import api from 'api'
import util from '../../util'

export default {
  data () {
    return {
      posts: null,
      new_title: null,
      post_to_update: null,
      update_title: null,
    }
  },
  created () {
    api.getPosts().then((result) => {
      this.posts = result.data
    })
  },
  methods: {
    handleDelete (post) {
      const id_to_delete = post.id
      api.deletePost(id_to_delete).then(() => {
        this.posts = this.posts.filter(post => post.id !== id_to_delete)
        util.notice('Successfully deleted')
      }).catch((error) => {
        util.alert(`Error ${error}`)
      })
    },
    handleCreatePost () {
      api.createPost({post: {title: this.new_title}}).then(({data}) => {
        this.posts.push(data)
        this.new_title = null
        util.notice('Successfully created')
      }).catch((error) => {
        util.alert(`Error ${error}`)
      })
    },
    handleUpdatePost () {
      const payload = {
        title: this.update_title
      }
      api.updatePost(this.post_to_update.id, payload).then(({data}) => {
        this.post_to_update.title = data.title
        this.post_to_update = null
        util.notice('Successfully updated')
      }).catch((error) => {
        util.alert(`Error ${error}`)
      })
    },
    showUpdatePost (post) {
      this.post_to_update = post
      this.update_title = post.title
      this.$nextTick(() => {
        this.$refs['new-title'].focus()
      })
    }
  }
}
</script>
