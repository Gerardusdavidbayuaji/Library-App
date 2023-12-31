import React, { useState, useEffect, ReactNode } from "react";
import { getBooks, Book } from "@/utils/apis/books";

import { useToast } from "@/components/ui/use-toast";
import { Button } from './ui/button';

import NavbarContent from './navbar-content';
import InputForm from './form';
import BookCard from "@/components/book-card";
import FooterContent from "./footer-content";


interface ContentLayoutProps {
  children?: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({}) => {

  const { toast } = useToast();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error) {
      const castedError = error as Error;
      toast({
        title: "Oops! Something went wrong.",
        description: castedError.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <div className='w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-auto'>
      <NavbarContent/>
      <div className="container py-10 mx-auto grow">
        <div className='flex justify-center items-center gap-11 text-white rounded-3xl mx-auto' style={{ background: "#0A4D68"}}>
          <div>
            <h1 className='text-5xl font-semibold leading-relaxed font-roboto'>Welcome to Library App</h1>
            <blockquote className='font-light leading-relaxed font-roboto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br/> the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br/> galley of type and scrambled it to make a type specimen book.</blockquote>
          </div>
          <img src="/assets/imagecontent.png" alt="logo content" className='w-48 h-auto m-5'/>
        </div>
        <div className='flex justify-center items-center py-10 mx-auto gap-2'>
          <form action="" className='w-96' style={{ borderColor: "#0A4D68" }}>
            <InputForm 
            label="" 
            type="" 
            placeholder="Search all books" 
            nama="" 
          />
          </form>
        <Button className="px-auto border rounded-full " style={{background: "#0A4D68"}}>Search</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
        </div>
      </div>
        <FooterContent/>
    </div>
  );
};

export default ContentLayout;