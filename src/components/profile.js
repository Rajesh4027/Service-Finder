import React, { useEffect, useState } from 'react';
import { db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router';

function Profile() {
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

  return (
    <div className='grid items-center justify-center min-h-screen '>
      <div>
        {userDetails ? (
          <>
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
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
