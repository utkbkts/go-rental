import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MobileMenu from "./partials/MobileMenu";
import { FaCar } from "react-icons/fa"; // Örnek ikon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Header = () => {


  return (
    <div className="shadow-md w-full py-4  bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="flex items-center justify-between container mx-auto">
        <h1 className="text-2xl flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
          <FaCar className="text-blue-500 mt-1" />
          Car{" "}
          <span className="text-blue-400 font-bold underline-offset-2 underline">
            Go
          </span>
        </h1>
        <div className="hidden md:flex items-center gap-4">
          <Button className="cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 m">
            Login
          </Button>
          <div className="relative">
            {/* Avatar with Menu */}
            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer my-1">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem >Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-end">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
