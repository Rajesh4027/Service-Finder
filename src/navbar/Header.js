import { Bars3Icon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react';
import { db } from "../auth/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router';



function Header() {

    // user and logout section
    const auth = getAuth();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No such user document!");
        }
      } else {
        console.log("User is not logged in");
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    fetchUserData(); 
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully");
      navigate("/login"); 
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };












    // nav section
    const [togglemenu, setToggleMenu] = useState(false);





  const handlebar = () => {
    setToggleMenu(!togglemenu)

  }
  return (
    <header className='flex  justify-between px-3 py-3 bg-nav items-center '  >
      <a className='font-bold text-black text-2xl' href="#">Hello</a>
      <nav className='hidden md:block'>
        <ul className="flex font-light">
          <li className='nav-style'><a href="#home">Home</a></li>
          <li className='nav-style'><a href="#about">About</a></li>
          <li className='nav-style'><a href="#projects">Projects</a></li>
          <li className='nav-style'><a href="#resume">Resume</a></li>
          <li className='nav-style'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className='hidden md:block '>
        <button className='px-3 rounded-md border-2 hover:border-blue-800  py-1 mr-2 hover:text-blue-950 hover:font-medium ' >Login</button>
      </div>

      {togglemenu && <nav className='block md:hidden '>
        <ul onClick={() => setToggleMenu(!togglemenu)} className="mobile-nav">
           <profile /> 
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>

          <div className='flex flex-col drop-shadow-lg  bg-slate-200 py-2'>
            <button className='py-2 border-2 mx-3  border-blue-700 bg-white rounded-md hover:bg-blue-800' >Login</button>
            <button className='py-2 bg-blue-900 text-white mt-2 mx-3' >Register</button>
            <div>
              <h1>Welcome {userDetails.firstname}</h1>
              <div>
                <h2>{userDetails.email}</h2>
                <h2>{userDetails.lastname}</h2>
              </div>
              <button
                className="px-4 py-1 font-medium text-white bg-orange-500 rounded-sm hover:bg-orange-600 outline-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>


        </ul>

      </nav>


      }
      <button className='block md:hidden' onClick={handlebar}><Bars3Icon className=' hover:bg-blue-900 hover:text-white px-1  h-7 mr-3' /></button>
    </header>
  )
}

export default Header