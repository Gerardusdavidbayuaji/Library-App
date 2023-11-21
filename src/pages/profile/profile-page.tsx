import NavbarContent from "@/components/navbar-content";
import FooterContent from "@/components/footer-content";

import EditProfile from "./edit-profile";
import ProfileUser from "./profile-user";

import { Card, CardContent } from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const ProfilePage = () => {
  return (
  <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-auto">
    <NavbarContent/>
    <div className="container mx-auto grow grid grid-rows grid-flow-col">
      <div className="grid row-span-3">
      <Tabs defaultValue="login" className="w-4/5 mx-auto py-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login" style={{ color: '#0A4D68' }}>Profile</TabsTrigger>
        <TabsTrigger value="password" style={{ color: '#0A4D68' }}>Edit Profile</TabsTrigger>
      </TabsList>

      {/* Start profile */}
      <TabsContent value="login">
        <Card>
          <CardContent>
            <div className="">
              <ProfileUser/>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End profile */}

      {/* Start edit profile */}
      <TabsContent value="password">
        <Card>
          <CardContent>
            <div className="">
              <EditProfile/>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End edit profile */}
    </Tabs>
      </div>
      <div className="col-span-2 text-center pt-10 mt-9 border rounded-lg">
        <p>History of Borrows</p>
      </div>
      <div className="row-span-2 col-span-2 text-center pt-10 my-9 border rounded-lg">
        <p>List of Borrows</p>
      </div>
    </div>
    <FooterContent/>
  </div>
  )
}

export default ProfilePage