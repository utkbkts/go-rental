import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import UpdatePassword from "../updatePassword/UpdatePassword";
import Profile from "../profile/Profile";
const TabsClick = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="Profile">
          <Link to={"/me/profile"}>
            <Profile />
          </Link>
        </TabsTrigger>
        <TabsTrigger value="Update Password">
        <Link to={"/me/update-password"}>
         <UpdatePassword />
         </Link>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default TabsClick;
