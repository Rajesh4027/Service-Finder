import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from "./firebase"
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function Register() {

    const navigate = useNavigate();

    const logClick = () =>{
        navigate('/login')
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    password:password,
                    firstname: fname,
                    lastname: lname,
                })

            }
            navigate('/login')
            console.log("User Registeration Successfully");
            toast.success("User Registered Successfully", {
                position: "top-center"
            })

        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center"
            })
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">First name</label>
                        <input
                            type="text"
                            placeholder='First name'
                            onChange={(e) => setFname(e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none hover:shadow-indigo-500/40 hover:shadow"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Last name</label>
                        <input
                            type="text"
                            placeholder='Last name'
                            onChange={(e) => setLname(e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none hover:shadow-indigo-500/40 hover:shadow"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none hover:shadow-indigo-500/40 hover:shadow"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none hover:shadow-indigo-500/40 hover:shadow"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white rounded bg-green-500 hover:bg-green-600"
                    >
                        Register
                    </button>
                    <div className='flex items-center justify-end'>
                        <span className='mr-2'>Already Registered?</span>
                        <button onClick={logClick}
                            className=" px-4 py-1  font-medium text-white bg-indigo-600 rounded-sm hover:bg-indigo-700 "
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register