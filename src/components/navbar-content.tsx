import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from 'react-router-dom';
import ProfilePage from '@/pages/profile/profile-page';
import HistoryBorrowPage from '@/pages/profile/history-borrow';
import HomeLayout from './home-layout';
import ContentLayout from './content-layout';


const NavbarContent: React.FC = () => {
  return (
    <header className='w-full sticky top-0' style={{ backgroundColor: '#05BFDB' }}>
      <div className='grid-cols flex container items-center justify-between py-5 px-20'>
        <Link to="/" className='text-3xl font-medium font-roboto text-white tracking-widest'>Library App</Link>
        <div className='flex items-center justify-between gap-10 text-lg font-medium font-roboto text-white'>
        <Link to="/">Home</Link>
        <Link to="/content-layout">List of Books</Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link to="/profile-page">Profile</Link></DropdownMenuItem> 
            <DropdownMenuItem asChild><Link to="/history-borrow">History Borrow</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link to="/">Logout</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
    </header>
  );
};

export default NavbarContent;
