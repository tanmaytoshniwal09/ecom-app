import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ComponentType;
  isLogin: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Element, isLogin }) => {
  return isLogin ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
