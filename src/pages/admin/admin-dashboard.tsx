import NavbarContent from "@/components/navbar-content"
import ListOfBook from "./list-of-books"
import ListOfBorrow from "./list-of-borrows"
import FooterContent from "@/components/footer-content"


import {
  CardContent,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Dashboard = () => {
  return (
    <div>
    <NavbarContent/>
    <div className="container flex justify-center pt-5">
      <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Link of Book</TabsTrigger>
        <TabsTrigger value="password">Link of Borrow</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
          <CardContent>
            <ListOfBook/>
          </CardContent>
      </TabsContent>
      <TabsContent value="password">
          <CardContent>
          <ListOfBorrow/>
          </CardContent>
      </TabsContent>
    </Tabs>
    </div>
    <FooterContent/>
    </div>

  )
}

export default Dashboard