<template>
  <main>
    <user-list :users="store.users"></user-list>
    <message-list :messages="store.messages"></message-list>
    <message-form></message-form>
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
