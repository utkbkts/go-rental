import React, { Suspense } from "react";
import Loading from "@/components/custom/Loading";
import NotFound from "@/components/custom/NotFound";
import UserLayout from "@/layouts/UserLayout";
import MyBookings from "@/pages/bookings/MyBookings";

const Profile = React.lazy(() => import("@/pages/users/profile/Profile"));

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
      path: "bookings",
      element: (
        <Suspense>
          <MyBookings />
        </Suspense>
      ),
    },
  ],
};
