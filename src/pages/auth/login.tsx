import React from "react";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/form";
import RegisterPage from "./register";
import { Link } from "react-router-dom";



const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center font-roboto h-screen" data-type="login">
            <div className="w-full max-w-xs mx-auto">
                <h1 className="text-3xl mb-2 font-roboto font-bold" style={{ color: '#0A4D68' }}>Login</h1>
                <h2 className="mb-5" style={{ color: '#0A4D68' }}> Walcome, please enter your details</h2>
                <form action="">
                    <InputForm 
                    label="Email" 
                    type="email" 
                    placeholder="Enter your email" nama="email" />
                    <InputForm 
                    label="Password" 
                    type="password" 
                    placeholder="Enter your password" nama="Password" />
                </form>
                <div className="flex">
                    <div>
                        <h3 className="text-sm pr-10" style={{ color: '#0A4D68' }}>Don't have an account?</h3>
                        <Link to="/register" className="text-sm" style={{ color: '#05BFDB'}}>Register here</Link>
                    </div>
                    <div>
                        <Link to="#"  className="text-sm pl-6" style={{ color: '#0A4D68' }}>Forget Password?</Link>
                    </div>
                </div>
                <Button className="px-8 float-right border rounded-full" style={{background: "#0A4D68",
                }}>Login</Button>
            </div>
        </div>
    )
    
}

export default LoginPage