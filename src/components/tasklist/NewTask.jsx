import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 px-3 py-2 rounded-lg text-sm">{data.category}</h3>
          <h4 className="bg-transparent px-3 py-2 rounded-lg m-2 text-base">
            {data.date}
          </h4>
        </div>
        <div className="bg-transparent font-semibold  rounded-lg text-2xl mt-5  ">
          {data.title}
          <p className="text-sm mt-2 ">
         
           {data.desciption}
          </p>
          <div><button className='mt-4 bg-violet-900'>accept task</button></div>
        </div>
      </div>
  )
}

export default NewTask