import React, { useState } from "react";

const Login = ({HandleLogin}) => {
 

 const [Email,setEmail]=useState('');
 const [Password,setpassword]=useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    HandleLogin(Email,Password);
    setEmail('')
    setpassword('')
   
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen ">
        <div className="border-2 border-black rounded-md bg-red-300 shadow-black shadow-2xl">
          <form
            onSubmit={(e) => {submitHandler(e)}}
            className="flex flex-col items-center justify-center mx-4 my-3 "
          >
            <input
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
              required
              className="border-2 border-gray-600 rounded-full px-5 py-3 outline-none text-xl text-white bg-transparent placeholder:text-white mt-3 "
              type="Email"
              placeholder="Enter your email"
            />
            <input
            value={Password}
            onChange={(e)=>{setpassword(e.target.value)}}
              required
              className="border-2 border-gray-600 rounded-full px-5 py-3 outline-none text-xl text-white bg-transparent placeholder:text-white mt-3 mx-2"
              type="password"
              placeholder="Enter your password"
            />
            <button className="border-2 border-none rounded-full px-5 py-3 outline-none text-xl text-white bg-red-950 placeholder:text-white mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
