import { Bell, CircleUser, Package2, Search } from "lucide-react";
import { SidebarMobile } from "./Sidebar";
import { Input } from "./ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "./theme-provider";

export const HeaderRight = () => {
  return (
    <>
      <div className="max-w-[100vw] md:max-w-[calc(100vw-220px)] lg:max-w-[calc(100vw-280px)]">
        <header className="flex h-14 w-full items-center gap-4 border-b bg-primary px-4 lg:h-[60px] lg:px-6">
          <SidebarMobile />
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>

              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to="/login">
                <DropdownMenuItem className="text-red-500 focus:cursor-pointer focus:bg-red-500 focus:text-white">Logout</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      </div>
    </>
  );
};

export const HeaderLeft = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="size-6 text-white" />
        <span className="text-white">Kedai Cik Man</span>
      </Link>
      {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
        <Bell className="h-4 w-4" />
        <span className="sr-only">Toggle notifications</span>
      </Button> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="ml-auto h-8 w-8" variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
