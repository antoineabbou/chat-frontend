<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="message" v-model="message" />
      <!-- <div v-if="typing" id="wave">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div> -->
    <button>Envoyer</button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      onSubmit (e) {
        this.sendMessage(this.message)
        this.message = ''
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
    width: 30px;
    height: 0px;

  }
  div#wave .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 1px;
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
