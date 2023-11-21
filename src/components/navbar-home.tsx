import React from 'react'
import { Link } from 'react-router-dom'
import ContentLayout from './content-layout';

const NavbarHome: React.FC = () => {
  return (
    <header className='w-full sticky top-0' style={{ backgroundColor: '#05BFDB' }}>
      <div className='grid-cols flex container items-center justify-between py-3 px-8'>
        <Link to="/" className='text-3xl font-medium font-roboto text-white tracking-widest'>Library App</Link>
        <div className='flex items-center justify-between gap-10 text-lg font-medium font-roboto text-white'>
        <Link to="/">Home</Link>
        <Link to="/content-layout">Explore Books</Link>
      </div>
      </div>
    </header>
  );
};

export default NavbarHome;
