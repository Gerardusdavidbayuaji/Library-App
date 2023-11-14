import React from 'react'

interface InputProps {
    type: string;
    placeholder:string;
    nama: string;
  } 

const Input = (props: InputProps) => {
    const {type, placeholder, nama} = props;
    return (
        <input 
        type={type} 
        className="text-sm border rounded-full  w-full py-2 px-3"
        placeholder={placeholder}
        name={nama}
        id={nama}
        style={{ 
            border: "2px solid #05BFDB",
            color: "#0A4D68",
        }}
        />
    );
};

export default Input;