import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { email, setEmail, username, setUsername, password, setPassword } = props;

  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail address"
        type="text"
        placeholder="Enter E-mail Address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter Username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default RegisterPageInputs;