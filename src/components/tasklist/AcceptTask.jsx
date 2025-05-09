import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className=" flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 py-2 rounded-lg text-sm">{data.category}</h3>
          <h4 className="bg-red-400 px-3 py-2 rounded-lg m-2 text-base">
           {data.date}
          </h4>
        </div>
        <div className="bg-red-400 font-semibold  rounded-lg text-2xl mt-5  ">
          {data.title}
          <p className="text-sm mt-2 ">
          
           {data.description}
          </p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-2 px-3 text-sm'>mark as completed</button>
             <button  className='bg-red-500 py-2 px-3 text-sm'>mark as failed</button>
          </div>
        </div>
      </div>
  )
}

export default AcceptTask