<template>
  <li>
    {{ data }}
  </li>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="stylus" scoped>
  li
    color white
    list-style-type:none
</style>