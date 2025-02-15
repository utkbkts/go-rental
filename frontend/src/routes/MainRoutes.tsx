import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import MainLayout from "@/layouts/MainLayout";
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("@/pages/home/HomePage"));
export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  errorElement: <NotFound />,
  children: [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      ),
    },
  ],
};
