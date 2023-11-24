import NavbarContent from "@/components/navbar-content";
import FooterContent from "@/components/footer-content";

import EditProfile from "./edit-profile";
import ProfileUser from "./profile-user";

import { Card, CardContent } from "@/components/ui/card";
import useCartStore from "@/utils/state";
import { Separator } from "@/components/ui/separator";
import { Book } from "@/utils/apis/books";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {

  const { cart, deleteBook, removeCart } = useCartStore();

  return (
    <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-scroll">
      <NavbarContent />
      <div className="container grow mx-auto">
        <div className="grid grid-cols-12 mt-5 gap-2">
          <div className="col-span-5 flex">
          <Tabs defaultValue="login" className="w-full h-full">
            <TabsList className="w-full">
              <TabsTrigger
                value="login"
                className="text-lg"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="text-lg"
              >
                Edit Profile
              </TabsTrigger>
            </TabsList>

            {/* Start profile */}
            <TabsContent value="login">
              <Card>
                <CardContent>
                  <div>
                    <ProfileUser />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* End profile */}

            {/* Start edit profile */}
            <TabsContent value="password">
              <Card>
                <CardContent>
                  <div>
                    <EditProfile />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* End edit profile */}
          </Tabs>
          </div>
          
          <div className="col-span-7 border rounded-lg flex flex-col h-full">
            <div>
              <p className="text-center text-lg py-2 font-medium">
                My Book
              </p>
              <Separator />
            </div>
            <div className="p-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center h-fit justify-between mx-auto">
              {cart.map((book: Book) => (
              <div className="items-center" key={book.id}>
              <img
                className="object-contain w-40"
                src={book.cover_image}
                alt={book.title}
              />
              <p className="text-sm my-2 text-center">{book.title}</p>
              <Button 
              variant="destructive" 
              onClick={() => deleteBook(book)}
              className="flex m-auto"
              style={{background: "#0A4D68"}}
              >
                Return
              </Button>
            </div>
          ))}
          </div>
          <div className="mt-auto self-end p-5">
          <Button
          variant="destructive"
          onClick={() => removeCart()}
          >
            Remove All Books
          </Button>
          </div>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default ProfilePage;