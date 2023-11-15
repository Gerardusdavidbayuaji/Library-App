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


const NavbarContent: React.FC = () => {
  return (
    <header className='w-full sticky top-0' style={{ backgroundColor: '#05BFDB' }}>
      <div className='grid-cols flex container items-center justify-between py-5 px-20'>
        <p className='text-3xl font-bold font-roboto text-white'>Library App</p>
        <div className='flex items-center justify-between gap-10 text-lg font-medium font-roboto text-white'>
        <a href="/homelayout">Home</a>
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
            <DropdownMenuItem>Profile</DropdownMenuItem> 
            <DropdownMenuItem>History Borrow</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
    </header>
  );
};

export default NavbarContent;
