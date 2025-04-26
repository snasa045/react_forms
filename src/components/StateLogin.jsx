import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const emailValidationFn = (value) => {
    return isEmail(value) && isNotEmpty(value);
  };

  const passwordValidationFn = (value) => {
    return hasMinLength(value, 6);
  };

  const {
    value: emailValue,
    hasError: emailError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", emailValidationFn);
  const {
    value: passwordValue,
    hasError: passwordError,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", passwordValidationFn);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError || passwordError) return;
    
    console.log(emailValue, passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          id='email'
          type='email'
          name='email'
          label='Email'
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailError && "Please enter a valid email address."}
        />

        <Input
          id='password'
          type='password'
          name='password'
          label='Password'
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordError && "Please enter a valid password."}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
