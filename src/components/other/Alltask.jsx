import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Alltask = () => {
  const [userData,setUserData] = useContext(Authcontext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-4 rounded h-auto'>
<div className='bg-red-400 px-4 py-2 rounded flex justify-between mb-2' >
        <h2 className='text-xl font-medium w-1/5 bg-red-700'>Employee name </h2>
        <h5 className='text-xl font-medium w-1/5 bg-red-700'>activeTask</h5>
        <h3 className='text-xl font-medium w-1/5 bg-red-700'>newTask</h3>
        <h5 className='text-xl font-medium w-1/5 bg-red-700'>completed</h5>
        <h5 className='text-xl font-medium w-1/5 bg-red-700'>failed</h5>
      </div>

     <div className='h-[85%] '> {userData.map((elem,idx)=>{
      
        return  <div key={idx} className='bg-emerald-300 px-4 py-2 rounded flex justify-between mb-2' >
        <h2  className='text-xl font-medium w-1/5 text-white'>{elem.firstName}</h2>
        <h3 className='text-xl font-medium w-1/5 text-blue-600'>{elem.taskNumber.active}</h3>
        <h5 className='text-xl font-medium w-1/5 text-yellow-400'>{elem.taskNumber.newTask}</h5>
        <h5 className='text-xl font-medium w-1/5 text-green-500'>{elem.taskNumber.completed}</h5>
        <h5 className='text-xl font-medium w-1/5 text-red-600'>{elem.taskNumber.failed}</h5>
      
        </div>
        })}
      </div>
     
      

      
    </div>
  )
}

export default Alltask