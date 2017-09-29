<template>
  <main>
    <div class="container">
      <div class="top"> </div>
      <div class="sidebar">
        <user-list :users="store.users"></user-list>
      </div>
      <div class="chat">
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

  .sidebar
    width 15%
    float left
    min-height: 100vh
    background-color white
    height 100vh
    display flex
    align-items center
    overflow-y scroll
  ul.users
    font-family Maison
    height 100vh


  .chat
    float left
    width 85%
    position relative
    min-height 100vh
    height 100vh
    font-family Editor
    background-color grey
    overflow-y scroll

  .top
    position absolute
    width 100%
    height 60px

  .form-container
    position fixed
    background-color white
    display flex
    align-items center
    height 140px
    bottom 0
    width 100%


</style>
