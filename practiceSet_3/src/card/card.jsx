import React from 'react'

function Card({values, friendsButton, cardIndex}) {
  const {url, name, profession, discription, friends} = values
  return (
    <div className="w-60 flex flex-col bg-zinc-300 justify-center items-center p-4 rounded-lg shadow-lg">
      <img
        className="w-full h-40 object-cover rounded-md"
        src= {url}
        alt="profilePic"
      />
      <h1 className="font-semibold text-xl font-serif p-2">{name}</h1>
      <h2 className="font-medium p-2">{profession}</h2>
      <p className="text-zinc-900 text-sm p-2 text-center">
        {discription}
      </p>
      <button onClick={() => friendsButton(cardIndex)} className= {`px-3 py-1 ${friends ? "bg-blue-400" : "bg-red-400"} rounded-full`}>{friends ? "Friends" : "Add Friends"}
      </button>
    </div>
  )
}

export default Card; 
