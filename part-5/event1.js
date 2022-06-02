
const School = require('./event2')

const school=new School()

school.on('bellRing',({bell,cls})=>{
    console.log(`we should to go home because ${bell} and ${cls}`)
 })
school.schoolOff()