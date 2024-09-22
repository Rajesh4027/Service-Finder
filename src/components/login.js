import React, { useState } from 'react'
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function Login() {

    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log('User Logged in Successfully');
            window.location.href = "/profile"
            toast.success('User Logged Successfully')
        }
        catch(error){
            console.log(error.message);
            toast.error(error.message,{
                position:"bottom-center"
            })
        }
    }

    const regClick = () =>{
        navigate('/register')
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none hover:shadow-indigo-500/40 hover:shadow"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none hover:shadow-indigo-500/40 hover:shadow"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Login
        </button>
       <div className='flex items-center justify-end'>
        <span className='mr-2'>New User</span>
        <button onClick={regClick}
          className=" px-2 py-1  text-white bg-orange-500 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Register !
        </button>
       </div>


      </form>
    </div>
  </div>
  )
}

export default Login