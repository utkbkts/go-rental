import Loading from "@/components/custom/Loading";
import NotFound from "@/components/custom/NotFound";
import MainLayout from "@/layouts/MainLayout";
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("@/pages/home/HomePage"));
const DetailsPage = React.lazy(() => import("@/pages/details/DetailsPage"));
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
    {
      path: "/car/details/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <DetailsPage />
        </Suspense>
      ),
    },
  ],
};
