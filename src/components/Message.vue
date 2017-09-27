<template>
  <li class="me">
    {{ data }}
  </li>
</template>

<script>
  export default {
    props: ['data']
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