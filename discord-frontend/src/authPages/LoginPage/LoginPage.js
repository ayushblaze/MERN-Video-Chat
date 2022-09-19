import React, { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    console.log("Logging in");
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter
        isFormValid={isFormValid}
        handleLogin={handleLogin}
      />
    </AuthBox>
  );
};

export default LoginPage;