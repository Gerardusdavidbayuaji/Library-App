import React, { ReactNode, ChangeEvent } from 'react';
import { EditIcon } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { booksSampleData, Book } from '@/utils/apis/books';

interface ListOfBookState {
  Alldata: Book[];
  selectedBook: Book | null;
}

interface ListOfBookProps {}

export default class ListOfBook extends React.Component<ListOfBookProps, ListOfBookState> {
  state: ListOfBookState = {
    Alldata: booksSampleData,
    selectedBook: null,
  };

  handleEdit = (id: number): void => {
    console.log(`Mengedit buku dengan ID: ${id}`);
    const selectedBook = this.state.Alldata.find((book) => book.id === id) ?? null;
    this.setState({ selectedBook });
  };
  
  handleDelete = (id: number): void => {
    console.log(`Menghapus buku dengan ID: ${id}`);
    this.setState({ selectedBook: null });
  };

  handleSave = (): void => {
    if (this.state.selectedBook) {
      console.log(`Menyimpan buku dengan ID: ${this.state.selectedBook.id}`);
      const updatedData = this.state.Alldata.map((book) =>
        book.id === this.state.selectedBook!.id
          ? { ...book, ...this.state.selectedBook }
          : book
          );
          
          this.setState({
            Alldata: updatedData,
            selectedBook: null, 
          });
        }
      };
      
  updateBook = (e: ChangeEvent<HTMLInputElement>, key: keyof Book): void => {
    if (this.state.selectedBook) {
      const updatedData = this.state.Alldata.map((book) => {
        if (book.id === this.state.selectedBook!.id) {
          return {
            ...book,
              [key]: e.target.value,
            };
          }
          return book;
        });
    
        this.setState({
          Alldata: updatedData,
        });
      }
    };

    render(): ReactNode {

    return (
      <div className='container py-10 mx-auto grow'>
        <Table className='border'>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center font-roboto text-lg">List</TableHead>
              <TableHead className="text-center text-lg font-roboto">Author</TableHead>
              <TableHead className="text-center text-lg font-roboto">Category</TableHead>
              <TableHead className="text-center text-lg font-roboto">ISBN</TableHead>
              <TableHead className="text-center text-lg font-roboto">Action</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="w-[100px] text-center font-roboto text-lg">
                <input
                  type="text"
                  value={this.state.selectedBook?.title ?? ''}
                  onChange={(e) => this.updateBook(e, 'title')}
                  className='border text-center'
                />
              </TableHead>
              <TableHead className="w-[100px] text-center font-roboto text-lg">
                <input
                  type="text"
                  value={this.state.selectedBook?.author ?? ''}
                  onChange={(e) => this.updateBook(e, 'author')}
                  className='border text-center'
                />
              </TableHead>
              <TableHead className="w-[100px] text-center font-roboto text-lg">
                <input
                  type="text"
                  value={this.state.selectedBook?.category ?? ''}
                  onChange={(e) => this.updateBook(e, 'category')}
                  className='border text-center'
                />
              </TableHead>
              <TableHead className="w-[100px] text-center font-roboto text-lg">
                <input
                  type="text"
                  value={this.state.selectedBook?.isbn ?? ''}
                  onChange={(e) => this.updateBook(e, 'isbn')}
                  className='border text-center'
                />
              </TableHead>
              <TableHead className="text-center text-lg font-roboto">
                <Button onClick={this.handleSave}>{this.state.selectedBook ? 'Save' : 'Add New Book'}</Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.Alldata.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell className="text-center text-base">{book.author}</TableCell>
                <TableCell className="text-center text-base">{book.category}</TableCell>
                <TableCell className="text-center text-base">{book.isbn}</TableCell>
                <TableCell>
                  <div className='flex justify-center items-center gap-2'>
                    <Button
                      style={{ background: "#00FFCA" }}
                      onClick={() => this.handleEdit(book.id)}
                    >
                      <EditIcon />
                    </Button>
                    <Button 
                      variant="destructive"
                      onClick={() => this.handleDelete(book.id)}
                    >
                      <Trash2/>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
