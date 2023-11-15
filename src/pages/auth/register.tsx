import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import InputForm from "@/components/form";

const RegisterPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center font-roboto h-screen" data-type="register">
            <div className="w-full max-w-xs mx-auto">
                <h1 className="text-3xl mb-2 font-roboto font-bold" style={{ color: '#0A4D68' }}>Register</h1>
                <form action="">
                <InputForm 
                    label="Full Name" 
                    type="text" 
                    placeholder="Nadim Makarim" 
                    nama="text" />
                <InputForm 
                    label="User Name" 
                    type="text" 
                    placeholder="nadim_makarim" 
                    nama="text" />
                <InputForm 
                    label="Email" 
                    type="email" 
                    placeholder="nadimmakarim@gmail.com" 
                    nama="email" />
                <InputForm 
                    label="Password" 
                    type="password" 
                    placeholder="Password minimal 8 character" 
                    nama="password" />
                <InputForm 
                    label="Confirm Password" 
                    type="password" 
                    placeholder="Confirm Password" 
                    nama="password" />
                </form>
                <div className="flex">
                    <div>
                        <h3 className="text-sm pr-8" style={{ color: '#0A4D68' }}>Don't have an account?</h3>
                        <Link to="/login" className="text-sm" style={{ color: '#05BFDB'}}>Login instead</Link>
                    </div>
                    <Button className="px-8 ml-10 float-right border rounded-full" style={{background: "#0A4D68",}}>Login</Button>
                </div>
            </div>
        </div>
    )
    
}

export default RegisterPage;