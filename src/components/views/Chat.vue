<template>
  <main>
    <div class="container">
      <div class="top"> </div>
      <div class="test">
        <user-list :users="store.users"></user-list>
      </div>
      <div class="main">
        <message-list :messages="store.messages"></message-list>
        <div class="form-container">
          <message-form></message-form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import UserList from '../UserList'
  import MessageList from '../MessageList'
  import MessageForm from '../MessageForm'

  export default {
    props: ['store'],
    components: {
      UserList,
      MessageList,
      MessageForm
    }
  }
</script>

<style lang="stylus">
  .container
    height 100%
    width:100%

  .test
    width 25%
    float left
    min-height: 100vh
    background-color black
  .main
    float left
    width 75%
    position:relative
    min-height:100vh
  .top
    position absolute
    width 100%
    height 60px
  .form-container
    position absolute
    bottom 0
    padding-bottom 20px
    width 100%
</style>