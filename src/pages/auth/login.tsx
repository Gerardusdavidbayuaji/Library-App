import React from "react";
import { Button } from "@/components/ui/button";

const Login = () => {
    return (
        <div className="flex flex-col justify-center font-roboto h-screen">
            <div className="w-full max-w-xs mx-auto">
                <h1 className="text-3xl mb-2 font-roboto font-bold" style={{ color: '#0A4D68' }}>Login</h1>
                <h2 className="mb-5" style={{ color: '#0A4D68' }}> Walcome, please enter your details</h2>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="User Name" className="block text-sm font-bold mb-2" style={{ color: '#05BFDB' }}>
                            User Name
                        </label>
                        <input type="text" className="text-sm border rounded-full  w-full py-2 px-3"
                        placeholder="Enter your user name"
                        style={{ 
                            border: "2px solid #05BFDB",
                            color: "#0A4D68",
                        }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="block text-sm font-bold mb-2" style={{ color: '#05BFDB' }}>
                            Password
                        </label>
                        <input type="password" className="text-sm border rounded-full w-full py-2 px-3"
                        placeholder="Enter your password"
                        style={{ 
                            border: "2px solid #05BFDB",
                            color: "#0A4D68",
                        }}
                        />
                    </div>
                </form>
                <div className="flex">
                    <div>
                        <h3 className="text-sm pr-10" style={{ color: '#0A4D68' }}>Don't have an account?</h3>
                        <a href="src/pages/auth/register.tsx" className="text-sm" style={{ color: '#05BFDB'}}>Register here</a>
                    </div>
                    <div>
                        <a href="#"  className="text-sm pl-6" style={{ color: '#0A4D68' }}>Forget Password?</a>
                    </div>
                </div>
                <Button className="px-8 float-right border rounded-full" style={{background: "#0A4D68",
                }}>Login</Button>
            </div>
        </div>
    )
    
}

export default Login