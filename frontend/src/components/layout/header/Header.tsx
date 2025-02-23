import { useLazyQuery, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MobileMenu from "./partials/MobileMenu";
import { FaCar } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CURRENT_USER, LOGOUT_USER } from "@/graphql/queries/user.queries";
import { isAuthenticatedVar, isLoadingVar, userVar } from "@/apollo/apolloVars";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserName } from "@/helpers/helpers";
import client, { clearApolloCache } from "@/apollo/apolloClient";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  const { loading, data } = useQuery(CURRENT_USER, {
    onCompleted: (data) => {
      userVar(data?.me);
      isAuthenticatedVar(true);
      isLoadingVar(false);
    },
    onError: () => {
      userVar(null);
      isAuthenticatedVar(false);
      isLoadingVar(false);
    },
  });

  const currentUser = data?.me;

  const [logout] = useLazyQuery(LOGOUT_USER);

  const logoutHandler = async () => {
    try {
      logout();
      clearApolloCache();

      client.writeQuery({
        query: CURRENT_USER,
        data: { me: null },
      });

      userVar(null);
      isAuthenticatedVar(false);

      toast({
        title: "You have successfully logged out.",
        variant: "success",
      });
    } catch (error) {
      console.error("Çıkış yapılırken hata oluştu:", error);
    }
  };

  return (
    <div className="shadow-md w-full py-4  bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="flex items-center justify-between container mx-auto">
        <Link to={"/"}>
          <h1 className="text-2xl flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
            <FaCar className="text-blue-500 mt-1" />
            Car{" "}
            <span className="text-blue-400 font-bold underline-offset-2 underline">
              Go
            </span>
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {!currentUser && !loading && (
            <Link to={"/auth"}>
              <Button className="cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 m">
                Login
              </Button>
            </Link>
          )}
          {currentUser ? (
            <div className="relative">
              {/* Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="cursor-pointer my-1">
                    <AvatarImage src={currentUser?.avatar?.url} />
                    <AvatarFallback className="uppercase cursor-pointer">
                      {getUserName(currentUser?.name) || "?"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link to={"/me/profile"}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  {currentUser?.role?.includes("admin") && (
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  )}
                  <DropdownMenuItem>My Bookings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logoutHandler}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            loading && <Skeleton className="h-10 w-10 rounded-full" />
          )}
        </div>
        <div className="md:hidden flex items-center justify-end">
          <MobileMenu logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
