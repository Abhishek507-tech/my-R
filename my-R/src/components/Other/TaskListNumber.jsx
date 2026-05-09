import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='bg-purple-400 rounded-xl py-6 px-9  w-[45%]'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='bg-blue-600 rounded-xl py-6 px-9  w-[45%]'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='bg-emerald-400 rounded-xl py-6 px-9  w-[45%]'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='bg-orange-400 rounded-xl py-6 px-9  w-[45%]'>
      <h2 className='text-3xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
 