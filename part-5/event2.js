
const EventEmitter=require('events')

class School extends EventEmitter{
    schoolOff(){
        console.log('class started')
        
        this.emit('bellRing',{
            bell:'bell ringing',
            cls:'class ended'
        })
        }
}



module.exports=School;