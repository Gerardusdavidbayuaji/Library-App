import React from 'react';

const Navbar = () => {
  return (
    <header className='w-full sticky top-0' style={{ backgroundColor: '#05BFDB' }}>
      <div className='grid-cols flex container items-center justify-between py-5 px-20'>
        <p className='text-3xl font-bold font-roboto text-white'>Library App</p>
        <div className='flex items-center justify-between gap-10 text-lg font-medium font-roboto text-white'>
        <a href="src/components/layout.tsx">Home</a>
        <a href="#">Explore Books</a>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
