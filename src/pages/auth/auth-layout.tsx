import React from 'react';
import LoginPage from './login';
import RegisterPage from './register';

interface AuthLayoutProps {
  type: "login" | "register";
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ type }) => {
  return (
    <div>
      {type === "login" && (
        <LoginPage />
      )}
      {type === "register" && (
        <RegisterPage />
      )}
    </div>
  );
};

export default AuthLayout;
