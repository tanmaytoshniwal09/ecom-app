import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import TopNavBar from "./components/nav-bar/TopNavBar";
import BottomNavBar from "./components/nav-bar/BottomNavBar";
import LoginPage from "./components/login-page/LoginPage";
import SignUpPage from "./components/signup-page/SignUpPage";
import UserDashboard from "./components/dashboard/UserDashboard";
import { ToastContainer } from "react-toastify";
import Cart from "./components/cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      localStorage.setItem("isLogin", JSON.stringify(false));
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <ToastContainer/>
      <TopNavBar />
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      
      <BottomNavBar />
    </div>
  );
}

export default App;
