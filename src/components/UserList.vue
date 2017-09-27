<template>
    <ul>
      <user v-for="user in users" :data="user"></user>
    </ul>
</template>

<script>
  import User from './User'

  export default {
    props: ['users'],
    components: {
      User
    }
  }
</script>


<style lang="stylus" scoped>
  ul
    margin 0px
    padding 0px
</style>