<template>
  <main class="login">
    <div class="login-content">
      <div class="head">
        <h1> Maurice. </h1>
        <h5> Ou la conversation à l'épreuve du numérique </h5>
      </div>
      <form @submit.prevent = "onSubmit">
        <input v-model="username" type="text" placeholder="Votre pseudo">
        <button><img src="../../../static/img/arrow-right.png"/></button>
      </form>
      <transition>
        <p class="error" v-if="error"> Votre pseudo est incorrect </p>
      </transition>
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        error: false,
        username: '',
        avatarUrl: '../static/img/avatar.svg'
      }
    },
    methods: {
      onSubmit (e) {
        // validation
        // TODO : Vérifier que le username n'existe pas déjà
        if (!this.username.match(/^\w{1,15}$/)) {
          this.error = true
        } else {
          this.error = false
          console.log(this.avatarUrl)
          this.$emit('login', this.username, this.avatarUrl)
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

  img
    width 25px

  form
    background rgba(255,255,255,0.4)
    display flex
    align-items center
    height 50px
    padding 10px
    margin-top 30px

  input
    background none
    border none
    outline none
    width 100%
    font-size 20px
    height 60px

  input::-webkit-input-placeholder
    color black


  button
    background none
    outline none
    border none
    cursor pointer

  input:focus,
    outline none

  button:focus
    outline none

  .login
    height 100vh
    display flex
    align-items center
    justify-content center
    text-align center
    background-color grey
  .login-content
    margin auto

  h1
    font-size 80px
    margin 0px
    font-family Editor
  h5
    font-size 18px
    margin 0px
    font-family Editor

  h1
    transition all 0.5s ease
  h1.v-enter
    opacity 0
    transform translateX(-50px)
  h1.v-leave
    opacity 0
    transform translateX(-50px)


</style>
