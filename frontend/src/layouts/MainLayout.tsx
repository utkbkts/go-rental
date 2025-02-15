import Header from "@/components/layout/header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
