
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Login from './components/login';
import SignUp from './components/register';
import Profile from './components/profile';

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
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
