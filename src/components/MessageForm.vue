<template>
  <form>
    <input @keyup.space ='isTyping' type="text" placeholder="message" v-model="message"/>
      <div v-if="typing" id="wave">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    <button>Envoyer</button>
  </form>
</template>
<script>
  export default {
    data () {
      return {
        message: '',
        typing: false
      }
    },
    watch: {
      message: function (val) {
        if (val.length > 0) {
          this.typing = true
        } else {
          console.log('No message')
          this.typing = false
        }
      }
    }
  }
</script>

<style scoped>
  input {
    width:70%
  }
  div#wave {
    position: relative;
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  div#wave .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 3px;
    background: #303131;
    animation: wave 1.3s linear infinite;
  }
  div#wave .dot:nth-child(2) {
    animation-delay: -1.1s;
  }
  div#wave .dot:nth-child(3) {
    animation-delay: -0.9s;
  }

  @keyframes wave {
    0%, 60%, 100% {
      transform: initial;
    }
    30% {
      transform: translateY(-15px);
    }
  }

</style>