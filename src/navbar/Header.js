import React, { useEffect, useState } from 'react';
import { db } from "../auth/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router';
import { FaUserCircle } from "react-icons/fa";

        


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
      navigate("/FrontUI");
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
    <header className='grid grid-cols-4  text-center px-3 py-3 bg-nav items-center '  >
      <a className='font-bold justify-self-start text-black text-2xl' href="#">Hello</a>
      <nav className='hidden md:block'>
        <ul className="flex font-light items-center justify-self-center">
          <li className='nav-style'><a href="#home">Beauty</a></li>
          <li className='nav-style'><a href="#about">Home</a></li>
          <li className='nav-style'><a href="#projects">Native</a></li>
          <li className='nav-style'><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className='hidden md:block '>
        <div className='flex '>
          <input type="text" className='border-2  px-3 mx-3 py-1 shadow rounded-md outline-none focus:border-gray-300' placeholder='Bangalore Mg Road..' />
          <input type="text" className='border-2  px-3 py-1 shadow rounded-md outline-none focus:border-gray-300 ' placeholder='Search for services...' />
        </div>
      </div>
      <div className='grid justify-end'>
        <FaUserCircle onClick={handlebar} className='hidden md:block text-3xl mr-3 ' />
      </div>
      {togglemenu && <nav>
        <ul onClick={() => setToggleMenu(!togglemenu)} className="mobile-nav  ">

          <div className='flex flex-col drop-shadow-lg  bg-slate-100 '>

            <div className='flex  items-center justify-center'>
            <FaUserCircle className='text-8xl' />

            </div>
            <div>
              <h1>Hello {userDetails?.firstname || "Guest" }</h1>
              <div>
                <h2>{userDetails?.email || "guest@gmail.com"}</h2>
                {/* <h2>{userDetails.lastname}</h2> */}
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
      <div className='fixed right-0'>
        <FaUserCircle onClick={handlebar} className='block md:hidden text-3xl mr-3 ' />

      </div>
    </header>
  )
}

export default Header