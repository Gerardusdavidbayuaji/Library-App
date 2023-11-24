import NavbarContent from "@/components/navbar-content";
import FooterContent from "@/components/footer-content";

import EditProfileAdmin from "./edit-profile-admin";
import ProfileAdmin from "./profile-admin";

import { Card, CardContent } from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const ProfilePageAdmin = () => {
    return (
    <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-scroll">
      <NavbarContent />
      <div className="container grow mx-auto py-10 px-10 gap-5">
        <div className="grid grid-cols-12 justify-center place-items-center">
          <div className="col-span-12">
          <Tabs defaultValue="login" className="w-full h-full">
            <TabsList className="grid w-full grid-cols-4 text-center">
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
                    <ProfileAdmin />
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
                    <EditProfileAdmin />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* End edit profile */}
          </Tabs>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default ProfilePageAdmin;