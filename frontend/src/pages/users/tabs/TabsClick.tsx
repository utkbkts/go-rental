import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpdatePassword from "../updatePassword/UpdatePassword";
import UserProfile from "../profile/UserProfile";
const TabsClick = () => {
  return (
    <section>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Profile Settings
        </h1>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 ">
            <TabsTrigger
              value="profile"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 data-[state=active]:bg-gray-300 cursor-pointer"
            >
              Update Profile
            </TabsTrigger>
            <TabsTrigger
              value="update-password"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 data-[state=active]:bg-gray-300 cursor-pointer"
            >
              Update Password
            </TabsTrigger>
            <TabsTrigger
              value="update-avatar"
              className=" text-sm font-medium text-gray-600 hover:text-gray-900 data-[state=active]:bg-gray-300 cursor-pointer"
            >
              Update Avatar
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-6">
          <UserProfile/>
          </TabsContent>
          <TabsContent value="update-password" className="mt-6">
           <UpdatePassword/>
          </TabsContent>
          <TabsContent value="update-avatar" className="mt-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Update avatar
              </h2>
              <p className="text-gray-600">Change your avatar here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsClick;
