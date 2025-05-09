import React, { useContext } from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import Alltask from "../other/Alltask";
import { Authcontext } from "../../context/Authprovider";

const AdminDashboard = (props) => {
const [userData,setUserData] = useContext(Authcontext)
console.log(userData)
  return (
    <>
      <div className="h-screen w-full p-10">
        <Header changeUser={props.changeUser}  />
        <CreateTask />
        <Alltask/>
      </div>
    </>
  );
};

export default AdminDashboard;
