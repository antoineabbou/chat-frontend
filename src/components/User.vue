<template>
  <transition name="slideLeft">
    <li>
      {{ data.username }}
    </li>
  </transition>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="stylus"media=""  scoped>
  li
    color black
    list-style-type none
    text-transform uppercase
    font-size 16px
    margin 50px 0px 50px 0px
  input
    width 70%
  #wave
    position relative
    width 30px
    height 0px
    float left
  #wave .dot
    display inline-block
    width 6px
    height 6px
    border-radius 50%
    margin-right 1px
    background #303131
    animation wave 1.3s linear infinite
   #wave .dot:nth-child(2)
    animation-delay -1.1s
  #wave .dot:nth-child(3)
    animation-delay -0.9s

  @keyframes wave {
    0%, 60%, 100% {
      transform: initial;
    }
    30% {
      transform: translateY(-15px);
    }
  }

  .slideLeft-enter-active,
  .slideLeft-leave-active
    transition: opacity .5s, transform .5s;

  .slideLeft-enter
    opacity: 0;
    transform: translateX(-50px)
  
</style>
