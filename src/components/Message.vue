<template>
  <transition name="punchline">
    <li :class="[customClass]">
      <div class="dialog">
          <div v-if="this.data.data.author.id !== this.$store.user.id">
            <img :src=test />
          </div>
          <div v-if="this.data.data.author.id !== this.$store.user.id">
            <img class="arrow" src="../../static/img/arrow-right.png"/>
          </div>
          <p class="date">
            <span v-if="this.data.data.author.id !== this.$store.user.id"> {{ data.data.author.username }} - </span>
            {{ formattedTime }}
          </p>
          <div class="content">
            <p :class="[customSize]"> {{ data.data.body }} </p>
          </div>
          <div v-if="this.data.data.author.id === this.$store.user.id">
            <img class="arrow" src="../../static/img/arrow-left.png"/>
          </div>
          <div v-if="this.data.data.author.id === this.$store.user.id">
            <img :src= test />
          </div>
      </div>
    </li>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        customClass: '',
        customSize: '',
        test: '',
        formattedTime: ''
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
        this.test = this.$store.user.avatarUrl
      },
      detectLength () {
        var length = this.data.data.body.length
        if (length < 15) {
          this.customSize = 'big'
        } else if (length >= 15 && length < 50) {
          this.customSize = 'medium'
        } else {
          this.customSize = 'small'
        }
      },
      convertDate () {
        var timestampFormated = (this.data.data.createdAt)
        var date = new Date(timestampFormated)
        var hours = date.getHours()
        var minutes = '0' + date.getMinutes()
        this.formattedTime = hours + ':' + minutes.substr(-2)
      }
    },
    created () {
      this.convertDate()
      this.detectOwnMessage()
      this.detectLength()
    }
  }
</script>

<style lang="stylus" scoped>
  @font-face
    font-family Editor
    src url('../../static/fonts/Editor-Medium.ttf')

  @font-face
    font-family Maison
    src url('../../static/fonts/MaisonNeue/MaisonNeueMedium.otf')

  @font-face
    font-family MaisonBold
    src url('../../static/fonts/MaisonNeue/MaisonNeueBold.otf')

  .dialog
    display flex
    align-items center
    position relative

  .date
    position absolute
    top -15%
    text-transform uppercase
    font-family Maison

  .him .date
    left 180px

  .me .date
    right 185px
  .me .content
    font-family MaisonBold

  .list
    overflow-y scroll
    height 100vh

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
    font-family Editor
    min-width 350px
    max-width 650px
    word-break break-all
    padding-left 0px
    margin 15px 0px

  li:nth-last-child(1)
    padding-bottom: 50px

  .him
    /* background #eee*/
    float left
  .him .dialog .face,
  .him .dialog img,
  .him .dialog p,
  .him .dialog .content
    /* float:left */

  img
    width 100px

  .arrow
    width 20px
    margin 0px 30px
  .me
    float right;
    /* background #0084ff; */
    color #fff;
    margin-right 10px
    min-width:0px

  p
    margin: 0px
    color black
  .big
    font-size 70px

  .medium
    font-size 38px

  .small
    font-size 18px

  .punchline-enter-active,
  .punchline-leave-active
    transition: opacity .5s, transform .5s;

  .punchline-enter
    opacity: 0;
    transform: translateY(35px)



</style>
