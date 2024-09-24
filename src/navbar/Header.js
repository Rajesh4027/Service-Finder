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
    <header className='flex  justify-around text-center px-3 py-3 bg-nav items-center '  >
      <a className='font-bold text-black text-2xl' href="#">Hello</a>
      <nav className='hidden md:block'>
        <ul className="flex font-light items-center ">
          <li className='nav-style'><a href="#home">Beauty</a></li>
          <li className='nav-style'><a href="#about">Home</a></li>
          <li className='nav-style'><a href="#projects">Native</a></li>
          <li className='nav-style'><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className=' hidden md:block  '>
        <input type="text" className='border-2 px-3 mx-3 py-1 shadow rounded-md outline-none focus:border-gray-300' placeholder='Bangalore Mg Road..' />
        <input type="text"  className='border-2 px-3 py-1 shadow rounded-md outline-none focus:border-gray-300 ' placeholder='Search for services...' />
      </div>
      <div>
      <FaUserCircle onClick={handlebar} className='hidden md:block text-3xl mr-3 ' />
      </div>
      {togglemenu && <nav>
        <ul onClick={() => setToggleMenu(!togglemenu)} className="mobile-nav ">
        {/* <FaUserCircle  className=' text-5xl mr-3 ' /> */}
          
          <div className='flex flex-col drop-shadow-lg  bg-slate-200 py-2'>
            <div>
              <h1>Hello {userDetails.firstname}</h1>
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
      <FaUserCircle onClick={handlebar} className='block md:hidden text-3xl mr-3' />
    </header>
  )
}

export default Header