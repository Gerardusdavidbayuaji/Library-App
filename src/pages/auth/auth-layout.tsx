import LoginPage from "./login"
import RegisterPage from "./register"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function AuthLayout() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login" style={{ color: '#0A4D68' }}>Login</TabsTrigger>
        <TabsTrigger value="password" style={{ color: '#0A4D68' }}>Registration</TabsTrigger>
      </TabsList>

      {/* Start Login */}
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle style={{ color: '#0A4D68' }}>Login</CardTitle>
            <CardDescription style={{ color: '#0A4D68' }}>
            Walcome, please enter your details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <LoginPage/>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Login */}

      {/* Start Registration */}
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle style={{ color: '#0A4D68' }}>Registration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <RegisterPage/>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* End Registration */}
    </Tabs>
  )
}