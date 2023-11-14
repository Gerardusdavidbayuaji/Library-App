// authlayout.tsx
import React from 'react';
import Login from './login';
import Register from './register';

interface AuthLayoutProps {
  type: "login" | "register";
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ type }) => {
  return (
    <div>
      {type === "login" && (
        <Login />
      )}
      {type === "register" && (
        <Register />
      )}
    </div>
  );
};

export default AuthLayout;
