import React, { Suspense } from "react";
import Loading from "@/components/custom/Loading";
import NotFound from "@/components/custom/NotFound";
import UserLayout from "@/layouts/UserLayout";
import { userLoader } from "@/loaders/userLoader";

const Profile = React.lazy(() => import("@/pages/users/profile/Profile"));

const UpdatePassword = React.lazy(
  () => import("@/pages/users/updatePassword/UpdatePassword")
);

export const UserRoutes = {
  path: "/me",
  element: (
    <Suspense
      fallback={
        <div>
          <Loading fullScreen={true} />
        </div>
      }
    >
      <UserLayout />
    </Suspense>
  ),
  errorElement: <NotFound />,
  loader: () => userLoader(),
  children: [
    {
      path: "profile",
      element: (
        <Suspense>
          <Profile />
        </Suspense>
      ),
    },
    {
      path: "update-password",
      element: (
        <Suspense>
          <UpdatePassword />
        </Suspense>
      ),
    },
  ],
};
