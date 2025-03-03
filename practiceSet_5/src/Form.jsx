import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleFormSubmitData}) {

  const {register, handleSubmit, reset} = useForm()

  const handleFormSummitData = (data) => {
    handleFormSubmitData(data)
    reset()
  }

  return (
    <div className='mt-10 flex gap-10 justify-center'>
        <form className='flex gap-10' onSubmit={handleSubmit(handleFormSummitData)}>
            <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white' type="text" placeholder='name...' />
            <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white' type="text" placeholder='email...' />
            <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none bg-white' type="text" placeholder='img url...' />
            <button className='px-5 text-white font-semibold py-1 bg-blue-500 rounded-md'>Summit</button>
        </form>
    </div>
  )
}

export default Form