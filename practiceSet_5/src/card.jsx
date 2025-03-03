import React from 'react'

function Card({user, handleRemove, id}) {
  return (
    <>
        <div className='w-43 h-full bg-zinc-300 rounded-lg flex flex-col items-center p-3'>
            <div className='w-[4vw] h-[4vw] rounded-full bg-zinc-300 overflow-hidden'>
                <img className='w-full h-full object-cover' src={user.image} alt="" />
            </div>
            <h1 className='text-xl mt-1 font-semibold '>{user.name}</h1>
            <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
            <p className='text-center text-xs mt-1 font-semibold tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, omnis corrupti. Odit.</p>
            <button onClick={() => handleRemove(id)} className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4'>Remove it</button>
        </div>
    </>
  )
}

export default Card