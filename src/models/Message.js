export default class Message {
  constructor (body, author, isBot = false) {
    this.body = body
    this.author = author
    this.isBot = isBot
    this.createdAt = Date.now()
  }
}
