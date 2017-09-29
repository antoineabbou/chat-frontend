import io from 'socket.io-client'
// import { EventBus } from '../main.js'
import Vue from 'vue'

export const store = new Vue({
  data: {
    user: {},
    messages: [],
    users: [],
    typing: false,
    usersTyping: []
  }
})

export default {
  install (Vue, options) {
    const socket = io(options.api)

    Vue.prototype.$store = store // partager le store avec d'autres instances de vue

    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('user connected', (user) => {
      console.log(user)
      store.user = user
    })

    socket.on('user left', (user) => {
      console.log('disconnected')
      let newUserList = store.users.filter(el => el.id !== user)
      store.users = newUserList
    })

    socket.on('user joined', (user) => {
      console.log(user.clients)
      store.users = user.clients
    })

    socket.on('new message', (data) => {
      console.log(data)
      var sounds = ['../../static/audio/01.mp3', '../../static/audio/02.mp3', '../../static/audio/03.mp3', '../../static/audio/04.mp3', '../../static/audio/05.mp3', '../../static/audio/06.mp3', '../../static/audio/07.mp3', '../../static/audio/08.mp3']
      var chosenAudio = sounds[Math.floor(Math.random() * sounds.length)]
      console.log(chosenAudio)
      var audio = document.createElement('audio')
      audio.src = chosenAudio
      audio.play()
      store.messages.push({
        data
      })
    })

    socket.on('typing', (user) => {
      console.log(user, "est en train d'écrire")
      store.usersTyping.push({user})
      store.typing = true
    })

    socket.on('stop typing', (user) => {
      console.log(user, "a arrêté d'écrire")
      store.typing = false
    })

    socket.on('getUsers', (users) => {
      console.log('list of users: ' + users)
      for (let i = 0; i < users.length; i++) {
        store.users.push(users[i])
      }
    })

    socket.on('wizz', () => {
      // user wizzed
    })

    Vue.mixin({
      methods: {
        sendMessage (text) {
          socket.emit('new message', text)
        },
        connect (username, avatarUrl) {
          socket.emit('user connected', {
            username,
            avatarUrl
          })
        },
        sendTyping (user, isTyping) {
          if (isTyping === true) {
            socket.emit('typing', user)
          } else {
            socket.emit('stop typing', user)
          }
        }
      }
    })
  }
}
