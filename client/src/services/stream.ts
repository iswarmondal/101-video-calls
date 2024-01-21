import {Peer} from 'peerjs'
import {socket} from '../services/stream.ts'

const peer = new Peer();

const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

export const joinRoom = (roomId)=>{
  peer.on("open", id=>{
    socket.emit("join-room", roomId, id)
  })
}

getUserMedia({video: true, audio: true}, (stream)=>{
  // Add user's own video stream in the page
  const myVideo = document.createElement('video')
  myVideo.srcObject = stream;

  myVideo.addEventListener('loadedmetadata', ()=>{
    video.play();
  })
  
  socket.on('user-connected', userId=>{
    const call = peer.call(userId, stream);

    call.on("stream", remoteStream=>{
      // Add the user video stream
    })

    call.on("close", ()=>{
      // Remove the user video stream
    })
  })
})
