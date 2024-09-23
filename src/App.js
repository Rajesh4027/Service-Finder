
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Login from './auth/login.js'
import SignUp from './auth/register.js'
import Profile from './auth/profile.js'
import UserPage from './components/UserPage.js'



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
