import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import Failedtask from "./Failedtask";

const Tasklist = ({data}) => {
  
  return (
    <div
      id="Tasklist"
      className="h-[55%] w-full overflow-x-auto bg-red-800 rounded-xl shadow-lg p-4 flex items-start gap-4 scroll-smooth"
    >
      {data.tasks.map((elem,idx)=>{

        
       if(elem.active){
        return <AcceptTask key={idx} data={elem}/>
       }
       if(elem.newTask){
        return <NewTask key={idx} data={elem}/>
      }
       if(elem.completed){
        return <CompleteTask key={idx} data={elem}/>
       }
       if(elem.failed){
        return <Failedtask key={idx} data={elem}/>
       }
      })}
    </div>
  );
};

export default Tasklist;

{
  /* <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div> */
}
