import Header from "@/components/layout/header/Header";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const pathname = useLocation().pathname;
  const startRoute = pathname.startsWith("/login");
  return (
    <div className="flex flex-col min-h-screen">
      {!startRoute && <Header />}
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
