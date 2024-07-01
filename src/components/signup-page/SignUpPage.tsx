import React from "react";

import SignUpPageForm from "./SignUpPageForm"

const SignUpPage = () => {
  return (
    <div
      style={{
        width: "1305px",
        height: " 781px",
        top: "200px",
        gap: "129px",
        opacity: "0px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        alignContent:"center",
      }}
    >
      <div
        style={{
          width: "805px",
          height: "781px",
          padding: "75px 0px 0px 0px",
          gap: "0px",
          borderRadius: "0px 4px 4px 0px",
          opacity: "0px",
          marginRight:"200px",
        }}
      >
        <img
          src="/assets/login-page/Side Image.png"
          alt="Google Play"
          style={{ width: "919px", height: "706px",top:"75px",left:"-8px"}}
        ></img>
      </div>
      <SignUpPageForm/>
    </div>
  );
};

export default SignUpPage;
