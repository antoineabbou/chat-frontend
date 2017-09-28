<template>
  <div id="app">
    <!-- <h1 v-if="store.user.name"> Bienvenue {{ store.user.name }} </h1> -->
    <router-view :store="$store" @login="onLogin" ></router-view>
  </div>
</template>

<script>
  // import { EventBus } from './main.js'
  export default {
    methods: {
      onLogin (username, avatarUrl) {
        /* this.$store.user = {
          name: username,
          isTyping: false
        }
        this.$store.users.push(this.$store.user) */
        this.connect(username, avatarUrl)
      },
      onTyping (typing) {
        this.$store.user.isTyping = typing
      }
    }
  }
</script>

<style lang="stylus">
@import "styles/theme"

html
  +below(600px) // rupture
    font-size 50%

</style>
