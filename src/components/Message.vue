<template>
  <li :class="[customClass]">
    {{ data.data.body }} - Écrit par {{ data.data.author.username }}
  </li>
</template>

<script>
  export default {
    data () {
      return {
        customClass: ''
      }
    },
    props: ['data'],
    methods: {
      detectOwnMessage () {
        if (this.data.data.author.id === this.$store.user.id) {
          this.customClass = 'me'
        } else {
          this.customClass = 'him'
        }
      }
    },
    created () {
      this.detectOwnMessage()
    }
  }
</script>

<style lang="stylus" scoped>
  ul
    list-style none;
    margin 0;
    padding 0;

  li
    display inline-block;
    clear both;
    padding 15px;
    border-radius 30px;
    margin-bottom 2px;

  .him
    background #eee;
    float left;


  .me
    float right;
    background #0084ff;
    color #fff;
    margin-right 10px



</style>
