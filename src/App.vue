<template>
  <div id="app">
    <h1 v-if="store.user.name"> Bienvenue {{ store.user.name }} </h1>
    <router-view :store="store" @login="onLogin"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store: {
        user: {}, // user informations
        users: ['Franquito', 'Paquito', 'Pepito'], // users list
        messages: ['Hello', 'Bonjour'] // messages list
      }
    }
  },
  methods: {
    onLogin (username) {
      this.store.user = {
        name: username
        // avatar
      }
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
