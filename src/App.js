// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Sidebar from "./components/sidebar/Sidebar";
import { getCurrentUser } from "./utils/storage";

function App() { 
  const [currentUser, setCurrentUser] = React.useState(getCurrentUser());

  React.useEffect(() => {
    const handleStorageChange = () => {
      setCurrentUser(getCurrentUser());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Navigate to="/login" />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Navigate to="/login" />} />
        <Route path="/about" element={<Sidebar />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
