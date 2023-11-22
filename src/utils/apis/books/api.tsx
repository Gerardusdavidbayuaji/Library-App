import { Response, PayloadPagination } from "@/utils/types/api";
import { AddBookSchema, EditBookSchema, Book } from ".";
import axiosWithConfig from "../axioswithconfig";

export const getBooks = async () => {
    try {
        const response = await axiosWithConfig.get
        ('/books')
        return response.data as Response<PayloadPagination<Book[]>>;
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}; 

export const getDetailBook = async (id_book: string) => {
    try {
        const response = await axiosWithConfig.get
        (`/books/${id_book}`)
        
        return response.data as Response<Book>;
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}; 

export const postAddBook = async (id_book: string) => {
    try {
        const response = await axiosWithConfig.post
        (`/books/${id_book}`)
        
        return response.data as Response<AddBookSchema>;
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}; 

export const putEditBook = async (id_book: string) => {
    try {
        const response = await axiosWithConfig.put
        (`/books/${id_book}`)
        
        return response.data as Response<EditBookSchema>;
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}; 