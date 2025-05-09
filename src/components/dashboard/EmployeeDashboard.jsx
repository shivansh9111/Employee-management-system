import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import Tasklist from "../tasklist/Tasklist";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-20 bg-[#1C1C1C] h-screen">
      <div><h1>{props.data.id}</h1></div>
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumber data={props.data}/>
      <Tasklist data={props.data}/>
    </div>
  );
};

export default EmployeeDashboard;
