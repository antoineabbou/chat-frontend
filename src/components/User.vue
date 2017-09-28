<template>
  <li>
    {{ data.username}}
    <div v-if="data.isTyping" id="wave">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
  </div>
  </li>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style scoped>
  li {
    color: white;
    list-style-type: none;
    /* float:left */
  }
  input {
    width:70%
  }
  div#wave {
    position: relative;
    width: 30px;
    height: 0px;
    float:left;

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
