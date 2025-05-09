import React, { useContext, useState } from 'react'
import { Authcontext } from '../../context/Authprovider'


const CreateTask = () => {

  const [userData,setUserData] = useContext(Authcontext)


  const [title, settaskTitle] = useState('')
 const [description, settaskDescription] = useState('')
  const [date, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  const [newTasks, setNewTasks] = useState({})

  const submitHandler = (e) => {
 e.preventDefault()
 
 setNewTasks({title,description,date,category,active:false,newTask:true,failed:false,completed:false})

 const data = userData
      data.forEach((elem)=>{
        if(assignTo === elem.firstName){
         elem.tasks.push(newTasks)
         elem.taskNumber.newtask = elem.taskNumber.newtask+1 
        }
      })
      
      setUserData(data)
console.log(data)
      
 settaskTitle(''),
 settaskDescription('')
 settaskDate('')
 setassignTo('')
 setcategory('')
  }
  return (
    <div className=" bg-[#1c1c1c] rounded-lg mt-2">
          <form onSubmit={(e)=>submitHandler(e)} className="flex items-start justify-between flex-wrap ">
            <div className="w-1/2 ml-2">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
              value={title}
               onChange={(e)=>settaskTitle(e.target.value)}
                type="text"
                placeholder="Enter your task"
                className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none border-[1px] border-gray-400 mb-4"
              />
              <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input
                value={date}
                onChange={(e)=>settaskDate(e.target.value)}
                  className="text-sm py-1 px-2 w-4/5  rounded-sm outline-none border-[1px] border-gray-400 mb-4"
                  type="date"
                />
              </div>

              <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                <input
                value={assignTo}
                onChange={(e)=>setassignTo(e.target.value)}
                  className="text-sm py-1 px-2 w-4/5  rounded-sm outline-none border-[1px] border-gray-400 mb-4"
                  type="text"
                />
              </div>

              <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input
                value={category}
                onChange={(e)=>setcategory(e.target.value)}
                  className="text-sm py-1 px-2 w-4/5  rounded-sm outline-none border-[1px] border-gray-400 mb-4"
                  type="text"
                />
              </div>
            </div>

            <div className="w-2/5 flex flex-col items-start mr-2">
              <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
              <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none  border-[1px] "
              value={description}
              onChange={(e)=>settaskDescription(e.target.value)}
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Enter description here"
              ></textarea>
              <button className="w-full bg-emerald-500 py-3 hover:bg-emerald-700 px-5 mt-4 rounded-sm text-sm">Create Task</button>
            </div>
          </form>
        </div>
  )
}

export default CreateTask