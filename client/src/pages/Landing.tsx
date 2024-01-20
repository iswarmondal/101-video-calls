import React from 'react'

const Landing = () =>{
  const [roomId, setRoomId] = React.useState("")
  return (
  <>
      <div className="w-screen h-screen bg-stone-900 flex justify-center items-center">
        <div className="flex flex-col justify-start items-start w-1/4">
          <input 
            type="text"
            placeholder="Enter your room ID"
            className="px-3 py-1 border-2 border-slate-100 w-full"
            onChange={(e)=>{setRoomId(e.target.value)}}
          />
          <div className="flex justify-between items-center w-full">
            <button 
              className="border-2 bg-blue-200 px-3 py-1 my-2 border-white active:bg-slate-700"
              onClick={()=>{
                console.log(roomId)
              }}
            >
              Join
            </button>
            <h2 className="text-white">- or -</h2>
            <button
              className="border-2 bg-violet-400 px-3 py-1 my-2 border-white active:bg-slate-700"
              onClick={()=>{handleRoomCreation()}} >
              Create room
            </button>
          </div>
        </div>
      </div>
  </>
  )
}

export default Landing;
