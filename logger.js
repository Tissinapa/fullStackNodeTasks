const EventEmitter = require('events')
const uuid = require('uuid')

console.log(uuid.v4())

class logger extends EventEmitter {
    log(msg) {
        //call event
        this.emit('message', {id: uuid.v4(), msg})
    }
}

const logger = new Logger();

logger.on('message', (data)=> console.log('Called listener ', data))

logger.log("hello world")
logger.log("Terve")

//module.exports = logger