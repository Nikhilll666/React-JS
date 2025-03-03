import React, { useState } from 'react'
import Card from './card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full p-4 flex max-h-96 overflow-auto justify-center gap-4 flex-wrap'>
        {users.map((item, index) => {
          return <Card id = {index} handleRemove = {handleRemove} user={item} key={index}/>
        })}
    </div>
  )
}

export default Cards