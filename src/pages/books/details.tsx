import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";


import { Book, getDetailBook } from "@/utils/apis/books";
import useCartStore from "@/utils/state";
import NavbarContent from "@/components/navbar-content";
import FooterContent from "@/components/footer-content";

const DetailBook = () => {
  const { cart, addBook } = useCartStore();
  const { toast } = useToast();
  const params = useParams();

  const [book, setBook] = useState<Book>();

  const isInCart = useMemo(() => {
    const checkCart = cart.find((item) => item.id === +params.id_book!);

    if (checkCart) return true;

    return false;
  }, [cart]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailBook(params.id_book as string);
      setBook(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function onClickBorrow() {
    const body = {
      bookId: cart.map((item) => item.id),
      borrow_date: new Date().toISOString(),
    }

    console.log(body);
    
    toast({
      description: "Book has been added to cart.",
    });
    addBook(book!);
  }

  return (
  <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-scroll">
    <NavbarContent/>
    <div className="container grow mx-auto py-10 px-10 flex">
      <div className="flex flex-col md:flex-row w-full h-full py-6 px-3 gap-5 items-center bg-white dark:bg-black">
        <img
        className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96"
        src={book?.cover_image}
        alt={book?.title}
        />
        <div className="flex flex-col gap-3 w-full">
          <div>
            <p className="font-bold text-2xl tracking-wide">{book?.title}</p>
            <p>by {book?.author}</p>
            <p>{book?.category}</p>
          </div>
          <Separator />
          <p>{book?.description}</p>
          <Button
            onClick={() => onClickBorrow()}
            disabled={isInCart}
            aria-disabled={isInCart}
            className="rounded-lg w-24" style={{background: "#0A4D68",}}
          >
            {isInCart ? "In Cart" : "Borrow"}
          </Button>
        </div>
      </div>
      </div>
      <FooterContent/>
    </div>
  );
};

export default DetailBook;