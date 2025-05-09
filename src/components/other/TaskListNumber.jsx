import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex justify-beween gap-5 h- m-10 ">
      <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-4xl font-semibold">{data.taskNumber.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2 className="text-4xl font-semibold">{data.taskNumber.active}</h2>
        <h3 className="text-xl font-medium">active</h3>
      </div>

      <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2 className="text-4xl font-semibold">{data.taskNumber.completed}</h2>
        <h3 className="text-xl font-medium">completed</h3>
      </div>

      <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-violet-400">
        <h2 className="text-4xl font-semibold">{data.taskNumber.failed}</h2>
        <h3 className="text-xl font-medium">failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
