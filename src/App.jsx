import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { Authcontext } from "./context/Authprovider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedinUserData, setloggedinUserData] = useState(null);
  const [userData,setUserData] = useContext(Authcontext);

  useEffect(()=>{
      const loggedInUser = localStorage.getItem('loggedInUser')
     
      if(loggedInUser){
       const userData=JSON.parse(loggedInUser)
     setUser(userData.role)
     setloggedinUserData(userData.data)
      }
  },[])

  const HandleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "1234") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      )
      if (employee) {
        setUser("employee");
        setloggedinUserData(employee);
      }
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee",data:employee })
      );
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : " "}

      {user == "admin" ?  <AdminDashboard changeUser={setUser} /> : user == "employee" ? ( <EmployeeDashboard changeUser={setUser} data={loggedinUserData} />
 ) : null}
    </>
  );
}

export default App;

// const data = useContext(Authcontext)
// console.log(data)
// HandleLogin("user@me.com", "12345");

// useEffect(() => {
//   // setLocalStorage();
//   getLocalStorage()
// }, []);
