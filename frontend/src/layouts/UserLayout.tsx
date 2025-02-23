import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header/Header";

const UserLayout = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
