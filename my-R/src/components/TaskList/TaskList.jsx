import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] flex overflow-x-auto item-center justify-start gap-5 w-full py-5 mt-10 rounded-xl
    '>
      <div className='flex-shrink-0 h-full w-[300px] bg-red-300 rounded-xl p-6'>
        <div className='flex justify-between items-start  '>
          <h3 className='bg-red-600 text-sm  px-3 py-1 rounded'>high</h3>
          <h4 className='text-base'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold mt-2'>Make a youtube video</h2>
        <p className='text-sm mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae quod eum aspernatur facilis minus, asperiores odit a numquam voluptas.
        </p>
      </div>

      

   

    </div>
  )
}

export default TaskList
