const express = require('express')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const {v4: uuidV4} = require('uuid')
require('dotenv').config()
console.log(process.env.SERVER_PORT)
const port = process.env.SERVER_PORT || 5555

app.get('/', (req, res)=>{
  res.send("Server is up")
})

io.on("connection", socket =>{
  socket.on('join-room', (roomId, userId)=>{
    socket.join(roomId)
    socket.broadcast.emit('user-connected', userId)

    socket.on('disconnect', ()=>{
      socket.broadcast.emit('user-disconnected', userName)
    })
  })
})

server.listen(port, ()=>{
  console.log(`server is running on ${port}`)
})
