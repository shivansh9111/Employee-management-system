import React, { useEffect } from "react";

const Header = (props) => {
  
  // const [username, setUserName] = useState('')
  // if(!data){
  //   setUserName('admin')
  // }else{
  //   setUserName(data.firstName)
  // }
 
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
  props.changeUser('')
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        hello ! <br /> <span className="text-white text-4xl font-semibold"> </span>
      </h1> 
      <button onClick={logOutUser} className="rounded-md p-2 text-lg font-medium outline-double bg-red-500 text-white ">Logout</button>
    </div> 
  );
};

export default Header;
