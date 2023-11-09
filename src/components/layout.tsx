import React from 'react'
import Navbar from './navbar'

const Layout = () => {

  return (
    <div className='w-full h-screen bg-white font-roboto flex flex-col overflow-scroll'>
        <Navbar/>
        <div className="container grow mx-auto py-10 px-10 flex">
          <div className="w-1/2 flex flex-col justify-center">
            <img className='w-1/2 h-3/5 ml-20 flex justify-center items-center' src="src/assets/image-home.png" alt="cover home page"/>
            <p className="mx-20 leading-7 mt-6 font-roboto"><span className='scroll-m-20 text-2xl font-semibold tracking-tight font-roboto'>Library App</span> is a platform that provides access <br/> to the latest technology resources and information, <br/>including books, journals, articles, and tutorials, <br/> to support technology development.</p>
          </div>
          <div className="w-1/2">
            <p>Kolom 2</p>
          </div>
        </div>
    </div>
  );
};

export default Layout