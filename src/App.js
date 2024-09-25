
import './App.css';
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


import Login from './auth/login.js'
import SignUp from './auth/register.js'
import Profile from './auth/profile.js'
import UserPage from './components/UserPage.js'
import FrontUI from './components/FrontUI.js';

import Loading from './components/Loading.js';
import MainServices from './Services/MainServices.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="App overflow-x-hidden ">
        <Routes>
        {isLoading ? (
          <Route path="/" element={<Loading />} />
        ) : (
          <Route path="/" element={<Navigate to="/frontui" replace />} />
        )}

          <Route path="/frontui" element={<FrontUI />} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/FrontUI" element={<FrontUI />} />
          <Route path="/MainServices" element={<MainServices />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
