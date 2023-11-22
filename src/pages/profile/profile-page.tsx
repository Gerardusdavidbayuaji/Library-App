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

  const { cart, deleteBook } = useCartStore();

  return (
    <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-scroll">
      <NavbarContent />
      <div className="container grow mx-auto py-10 px-10 flex">
        <div className="w-2/5 flex justify-center place-items-center">
          <Tabs defaultValue="login w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="login"
                className="text-lg"
                style={{ color: "#0A4D68" }}
              >
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="text-lg"
                style={{ color: "#0A4D68" }}
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

        {/* start my book */}
        <div className="w-3/5 justify-center place-items-center border rounded-lg">
          <p className="text-center text-lg py-2 font-medium" style={{ color: "#0A4D68" }}>
            My book
          </p>
          <Separator />
          <div className="p-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center h-fit">
          {cart.map((book: Book) => (
            <div className="items-center" key={book.id}>
              <img
                className="object-contain w-40"
                src={book.cover_image}
                alt={book.title}
              />
              <p className="text-sm my-2 text-justify">{book.title}</p>
              <Button 
              variant="destructive" 
              onClick={() => deleteBook(book)}
              className="flex my-2 ml-auto"
              >
                Return
              </Button>
            </div>
          ))}
          </div>
        </div>
        {/* end my book */}
      </div>
      <FooterContent />
    </div>
  );
};

export default ProfilePage;