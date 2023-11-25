import { booksSampleData, Book } from '@/utils/apis/books';
import { Component, ReactNode } from 'react';

import { EditIcon } from 'lucide-react'; 
import { DeleteIcon } from 'lucide-react'; 

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface ListOfBookState {
  Alldata: Book[];
}

export default class ListOfBook extends Component<{}, ListOfBookState> {

  state: ListOfBookState = {
    Alldata: booksSampleData,
  }

  render(): ReactNode {
    console.log(this.state.Alldata);
    return (
      <div className='container py-10 mx-auto grow'>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">List</TableHead>
            <TableHead className="text-center">Author</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">ISBN</TableHead>
            <TableHead className="text-center">Edit</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.state.Alldata.map(book => (
          <TableRow  key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell className="text-center">{book.author}</TableCell>
            <TableCell className="text-center">{book.category}</TableCell>
            <TableCell className="text-center">{book.isbn}</TableCell>
            <TableCell className="object-center"><EditIcon/></TableCell>
            <TableCell className="object-center"><DeleteIcon/></TableCell>
          </TableRow>
        ))}
      </TableBody>
        </Table>
      </div>
    );
  }
}
