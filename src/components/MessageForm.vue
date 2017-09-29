<template>
  <form @submit.prevent="onSubmit">
    <div class="top">
      <div v-if="$store.typing" id="wave">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <p v-if="$store.typing"> Quelqu'un est en train d'écrire </p>
    </div>
    <input ref="inputMessage" type="text" placeholder="Votre message..." v-model="message" />
    <button><img src="../../static/img/arrow-top.png"/></button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        message: '',
        date: new Date().getTime()
      }
    },
    methods: {
      onSubmit (e) {
        if (this.message.length > 0) {
          this.sendMessage(this.message)
        }
        this.message = ''
      }
    },
    watch: {
      message: function () {
        this.date = new Date().getTime()
        if (this.$store.typing === false) {
          this.$store.typing = true
          this.sendTyping(this.$store.user, true)
          console.log('Typing')
        }
        setTimeout(() => {
          var date = new Date().getTime()
          if (date - this.date > 800) {
            this.$store.typing = false
            this.sendTyping(this.$store.user, false)
            console.log('No Typing')
          }
        }, 800)
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
    font-family MaisonBold
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
    cursor pointer

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
    position: relative
    width: 70px
    height: 0px
  }

  .top
    display flex
    align-items center
    padding-left 45px


  div#wave .dot {
    float:left
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin-right: 7px;
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
