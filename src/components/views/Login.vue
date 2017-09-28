<template>
  <main>
    <form @submit.prevent = "onSubmit">
      <p class="error" v-if="error"> The username is invalid</p>
      <input v-model="username" type="text" placeholder="username">

      <button> Login </button>
    </form>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        error: false,
        username: ''
      }
    },
    methods: {
      onSubmit (e) {
        // validation
        // TODO : Vérifier que le username n'existe pas déjà
        if (!this.username.match(/^\w{1,15}$/)) {
          console.log(this.username)
          this.error = true
        } else {
          this.error = false
          this.$emit('login', this.username)
        }
      }
    },
    created () {
      console.log('test')
      this.$store.$watch('user', (user) => {
        if (user.id) {
          console.log('will push to /')
          this.$router.push('/')
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .error
    color red
</style>
