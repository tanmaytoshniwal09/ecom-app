import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuthRedirect = (Component: React.ComponentType, redirectPath: string) => {
  return (props: any) => {
    const navigate = useNavigate();
    const isLogin = JSON.parse(localStorage.getItem("isLogin") || "false");

    useEffect(() => {
      if (isLogin) {
        navigate(redirectPath);
      }
    }, [isLogin, navigate, redirectPath]);

    return <Component {...props} />;
  };
};

export default withAuthRedirect;
