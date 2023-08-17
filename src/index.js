const realTimeServer = require('./realTimeServer')
const app = require ('./server')


const PORT =9000

const httpServer= app.listen (PORT, () =>{
    console.log (`Server in running al port ${PORT}`)
})

realTimeServer (httpServer)