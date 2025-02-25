import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header/Header";
import TabsClick from "@/pages/users/tabs/TabsClick";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex  bg-gray-50 items-center justify-center h-24">
        <TabsClick />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
