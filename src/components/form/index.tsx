import React from 'react';
import Label from './label';
import Input from './input';

interface InputFormProps {
  label: string;
  nama: string;
  type: string;
  placeholder: string;
}

const InputForm: React.FC<InputFormProps> = (props) => {
  const { label, nama, type, placeholder } = props;
  return (
    <div className="mb-3">
      <Label htmlFor={nama}>{label}</Label>
      <Input nama={nama} type={type} placeholder={placeholder}/>
    </div>
  );
};

export default InputForm;
