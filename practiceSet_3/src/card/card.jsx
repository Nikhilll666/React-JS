// import React from 'react'

// function Card({values, friendsButton, cardIndex}) {
//   const {url, name, profession, discription, friends} = values
//   return (
//     <div className="w-60 flex flex-col bg-zinc-300 justify-center items-center p-4 rounded-lg shadow-lg">
//       <img
//         className="w-full h-40 object-cover rounded-md"
//         src= {url}
//         alt="profilePic"
//       />
//       <h1 className="font-semibold text-xl font-serif p-2">{name}</h1>
//       <h2 className="font-medium p-2">{profession}</h2>
//       <p className="text-zinc-900 text-sm p-2 text-center">
//         {discription}
//       </p>
//       <button onClick={() => friendsButton(cardIndex)} className= {`px-3 py-1 ${friends ? "bg-blue-400" : "bg-red-400"} rounded-full`}>{friends ? "Friends" : "Add Friends"}
//       </button>
//     </div>
//   )
// }

// export default Card; 


import React from "react";

function Card({ data, index, handleClick }) {
  const { url, songName, name, added } = data;

  return (
    <div className="w-60 p-3 bg-zinc-700 rounded-md flex gap-2 text-white">
      <div className="w-16 h-16 rounded-md flex items-center">
        <img
          className="w-full h-full object-cover rounded-full"
          src={url}
          alt={songName || "Song Image"}
        />
      </div>

      <div>
        <h2 className="font-semibold">{songName}</h2>
        <h3 className="text-sm p-0.5 mb-0.5">{name}</h3>
        <button
          onClick={() => handleClick(index)}
          className={`text-xs px-3 py-1 ${added ? "bg-blue-400" : "bg-red-400"} rounded-full`}
        >
          {added ? "Added" : "Add to favourites"}
        </button>
      </div>
    </div>
  );
}

export default Card;
