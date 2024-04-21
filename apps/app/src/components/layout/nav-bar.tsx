import Link from "next/link";
import { FaTiktok, FaLine, FaFacebook } from "react-icons/fa";
import { Button, Separator } from "@turbocharger/ui";
import { cn } from "@turbocharger/utils";
import { ThemeToggle } from "../theme-toggle";

const NavBar = () => {
  return (
    <nav className="h-18">
      <div className="flex h-full items-center justify-between px-10 md:justify-around md:px-0">
        <div className="hidden items-center justify-center space-x-2 md:flex">
          <Button
            className={cn(
              "active:scale-95",
              "rounded-xl px-6 py-3 text-center text-sm font-medium"
            )}
          >
            <FaTiktok size={20} />
            <span className="pl-2">Tiktok</span>
          </Button>

          <Button
            className={cn(
              "active:scale-95",
              "rounded-xl px-6 py-3 text-center text-sm font-medium"
            )}
          >
            <FaLine size={20} className="text-green-600" />
            <span className="pl-2">Line</span>
          </Button>

          <Button
            className={cn(
              "active:scale-95",
              "rounded-xl px-6 py-3 text-center text-sm font-medium"
            )}
          >
            <FaFacebook size={20} className="text-blue-700" />
            <span className="pl-2">Tiktok</span>
          </Button>
        </div>

        <Link href={"/"}>
          <div className="relative flex translate-x-0 items-center space-x-4 md:-translate-x-1/4">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Automobile.png"
              alt="Automobile"
              className="h-16 w-16 pb-2"
            />
            <p
              className={cn(
                "font-display pt-2 text-center text-2xl font-bold  text-transparent [text-wrap:balance]",
                "bg-gradient-to-br from-black to-blue-500 bg-clip-text",
                "dark:bg-gradient-to-br dark:from-white dark:to-blue-500 dark:bg-clip-text "
              )}
            >
              Kim Khan Auto Car
            </p>
          </div>
        </Link>

        <div className="flex items-center justify-between space-x-4">
          <a href="tel:+66946349500">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Telephone%20Receiver.png"
              alt="โทรติดต่อเรา"
              width="30"
              height="30"
              className="cursor-pointer"
            />
          </a>

          <ThemeToggle />
        </div>
      </div>

      <Separator className="dark:bg-white" />
    </nav>
  );
};

export default NavBar;
