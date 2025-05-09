import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 py-2 rounded-lg text-sm">{data.category}</h3>
          <h4 className="bg-red-400 px-3 py-2 rounded-lg m-2 text-base">
            {data.date}
          </h4>
        </div>
        <div className="bg-transparent font-semibold  rounded-lg text-2xl mt-5  ">
          {data.title}
          <p className="text-sm mt-2 ">
            
            {data.description}
          </p>
          <div className='mt-2'><button className='bg-green-700 w-full '> completed</button></div>
        </div>
      </div>
  )
}

export default CompleteTask