<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Votre message..." v-model="message" />
      <!-- <div v-if="typing" id="wave">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div> -->
    <button><img src="../../static/img/arrow-top.png"/></button>
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

<style lang="stylus" scoped>
  input
    width 90%
    -webkit-appearance none
    border none!important
    outline none
    padding-left 45px
  form
    position fixed
    display flex!important
    width 85%
    height 140px
    background white

  button
    background none
    border none
    outline none

  button:focus
    outline none

  img {
    width 45px!important;
  }

  input,
  input::-webkit-input-placeholder
    font-size 50px;
    line-height 3;
    color black

  input:focus {
    outline:none
  }

  button img {
    width:20px
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
