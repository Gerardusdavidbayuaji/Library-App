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
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react'; 

import useTheme from '@/utils/hooks/useTheme';
import { useToken } from '@/utils/contexts/token';
import { useToast } from './ui/use-toast';

const NavbarContent: React.FC = () => {

  const {token, user , changeToken } = useToken();
  const [toggleTheme] = useTheme();
  const { toast } = useToast();
  const navigate = useNavigate();

  function handleLogout() {
    changeToken()
    toast ({
      description: "logout succesfully"
    })
  }

  return (
    <header className='w-full sticky top-0' style={{ backgroundColor: '#05BFDB' }}>
      <div className='grid-cols flex container items-center justify-between py-3 px-8'>
        <Link to="/" className='text-3xl font-medium font-roboto text-white tracking-widest'>Library App</Link>
        <div className='flex items-center justify-between gap-10 text-lg font-medium font-roboto text-white'>
          <Link to="/">Home</Link>
          <Link to="/content-layout">List of Books</Link>
          {token && user.role === "user" &&(<ShoppingCartIcon onClick={() => navigate("/profile-page")}/>)}
          <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.profile_picture} alt={user.full_name} />
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44" align="end">
            {token && (
              <>
              <DropdownMenuLabel>Hi, {user.full_name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/profile-page">Profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/profile-page-admin">Profile page admin</Link></DropdownMenuItem>
              </>
            )}
          <DropdownMenuItem onClick={() => toggleTheme()}>
            Change Theme
          </DropdownMenuItem>
            <DropdownMenuSeparator />
            {token ? <DropdownMenuItem onClick={() => handleLogout()}>Logout</DropdownMenuItem> : 
            <>
          <DropdownMenuItem asChild><Link to="/">login</Link></DropdownMenuItem>
          <DropdownMenuItem asChild><Link to="/">Register</Link></DropdownMenuItem>
            </>}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
    </header>
  );
};

export default NavbarContent;
