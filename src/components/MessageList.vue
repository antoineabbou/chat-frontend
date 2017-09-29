<template>
  <div>
    <ul class="list">
      <message v-for="message in messages" :data="message"></message>
    </ul>
  </div>
</template>

<script>
  import Message from './Message'

  export default {
    data () {
      return {
        message: this.messages
      }
    },
    props: ['messages'], // Implement messages property
    components: {
      Message
    },
    computed: {
      countMessage: {
        get: function () {
          return this.$store.messages.length
        }
      }
    },
    watch: {
      countMessage: function () {
        this.$nextTick(() => {
          let messageList = document.querySelector('.list')
          console.log(messageList)
          messageList.scrollTop = messageList.scrollHeight
        })
      }
    }
  }
</script>

<style lang="css">
  .list {
    height: calc(100vh - 140px);
    overflow-y: scroll;
  }
  .list::after {
    content:'';
    display:block;
    width:100%;
    clear: both;

  }
</style>
