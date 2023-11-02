const EventEmitter = require('events')

// Class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter()
// event listener
myEmitter.on('event', ()=> console.log("Event fired"))

// init event

myEmitter.emit('event')
