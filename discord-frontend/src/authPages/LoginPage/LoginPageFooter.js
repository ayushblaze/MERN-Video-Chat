import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";


const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();  

  const handlePushToRegisterPage = () => {
    history.push("/register");
  };

  return (
    <>
    <div>
      <CustomPrimaryButton
        label="Login"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
    <RedirectInfo 
      text="Need an account? "
      redirectText="Create an account"
      additionalStyling={{ marginTop: "5px" }}
      redirectHandler={handlePushToRegisterPage}
    />
    </>
  );
};

export default LoginPageFooter;