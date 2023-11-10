import React from "react";
import { Button } from "@/components/ui/button";

const Register = () => {
    return (
        <div className="flex flex-col justify-center font-roboto h-screen">
            <div className="w-full max-w-xs mx-auto">
                <h1 className="text-3xl mb-2 font-roboto font-bold" style={{ color: '#0A4D68' }}>Register</h1>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="Full Name" className="block text-sm font-bold mb-2" style={{ color: '#05BFDB' }}>
                            Full Name
                        </label>
                        <input type="text" className="text-sm border rounded-full  w-full py-2 px-3"
                        placeholder="Nadim Makarim"
                        style={{ 
                            border: "2px solid #05BFDB",
                            color: "#0A4D68",
                        }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="User Name" className="block text-sm font-bold mb-2" style={{ color: '#05BFDB' }}>
                            User Name
                        </label>
                        <input type="text" className="text-sm border rounded-full w-full py-2 px-3"
                        placeholder="nadim_makarim"
                        style={{ 
                            border: "2px solid #05BFDB",
                            color: "#0A4D68",
                        }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="block text-sm font-bold mb-2" style={{ color: '#05BFDB' }}>
                            Email
                        </label>
                        <input type="text" className="text-sm border rounded-full w-full py-2 px-3"
                        placeholder="nadimmakarim@gmailcom"
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
                        placeholder="Password minimal 8 character"
                        style={{ 
                            border: "2px solid #05BFDB",
                            color: "#0A4D68",
                        }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Confirmasi Password" className="block text-sm font-bold mb-2" style={{ color: '#05BFDB' }}>
                            Confirmasi Password
                        </label>
                        <input type="password" className="text-sm border rounded-full w-full py-2 px-3"
                        placeholder="Confirm password"
                        style={{ 
                            border: "2px solid #05BFDB",
                            color: "#0A4D68",
                        }}
                        />
                    </div>
                </form>
                <div className="flex">
                    <div>
                        <h3 className="text-sm pr-8" style={{ color: '#0A4D68' }}>Don't have an account?</h3>
                        <a href="src/pages/auth/login.tsx" className="text-sm" style={{ color: '#05BFDB'}}>Login instead</a>
                    </div>
                    <Button className="px-8 ml-10 float-right border rounded-full" style={{background: "#0A4D68",}}>Login</Button>
                </div>
            </div>
        </div>
    )
    
}

export default Register