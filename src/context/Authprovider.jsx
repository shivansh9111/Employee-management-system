import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
 
  const [userData, setUserData] = useState(null);
 console.log(userData)

  useEffect(() => {
    setLocalStorage()
    const { employees} = getLocalStorage()
    setUserData(employees)
    
  
  },[]);

  return (
    <div>
      <Authcontext.Provider value={[userData,setUserData]}>{children}</Authcontext.Provider>
    </div>
  );
};

export default Authprovider;
