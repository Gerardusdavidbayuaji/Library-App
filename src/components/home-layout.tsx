import React from 'react';
import NavbarHome from './navbar-home';
import { AuthLayout } from '@/pages/auth/auth-layout';

const HomeLayout: React.FC = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col">
        <NavbarHome/>
        <div className="container grow mx-auto py-10 px-10 flex">
          <div className="w-1/2 flex flex-col justify-center place-items-center">
            <img className="w-auto h-64" src="/assets/imagehome.png" alt="cover home page"/>
            <p className="mt-6 font-roboto text-lg" style={{ color: '#0A4D68'}}><span className='text-4xl font-semibold tracking-tight font-roboto' style={{ color: '#05BFDB' }}>Library App </span> is a platform that provides access <br/> to the latest technology resources and information, <br/>including books, journals, articles, and tutorials, <br/> to support technology development.</p>
          </div>
          <div className="w-1/2 flex justify-center place-items-center">
          <AuthLayout />
          </div>
        </div>
    </div>
  );
};

export default HomeLayout