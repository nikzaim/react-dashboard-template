import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { createRootRoute, Link, Outlet, useLocation, useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Bell, CircleUser, Home, LineChart, Menu, Package2, Search, ShoppingCart, Users } from "lucide-react";
import { Icon, Package, SquaresFour, Lego, UsersThree, ChartDonut } from "@phosphor-icons/react";
import { useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();
  const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  const items = [
    { id: 1, name: "Dashboard", to: "/", Icon: SquaresFour },
    { id: 2, name: "Orders", to: "/orders", Icon: Package },
    { id: 3, name: "Products", to: "/products", Icon: Lego },
    { id: 4, name: "Customers", to: "#", Icon: UsersThree },
    { id: 5, name: "Analytics", to: "#", Icon: ChartDonut },
    // Add more items here as needed
  ];

  return !isLoginRoute ? (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-white md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center bg-blue-700 border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="size-6 text-white" />
              <span className="text-white">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {items.map((item) => (
                <NavbarItem key={item.name} to={item.to} name={item.name} Icon={item.Icon} />
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-blue-700 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                {items.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <NavbarItem to={item.to} name={item.name} Icon={item.Icon} />
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
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
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <ScrollArea className="h-[calc(100vh-60px)] w-full rounded-md">
          <main className="flex flex-grow flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="p-4">
              <Outlet />
            </div>
          </main>
        </ScrollArea>
      </div>
      <div className="absolute">
        <TanStackRouterDevtools />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
}

interface NavbarItemProps {
  to: string;
  name: string;
  Icon: Icon;
}

function NavbarItem({ to, name, Icon }: NavbarItemProps) {
  const router = useRouter();
  const isActive = router.state.location.pathname === to;

  return (
    <Link to={to} className={isActive ? "flex items-center gap-3 px-3 py-2 text-primary bg-muted rounded-lg" : "flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"}>
      <Icon size={24} color={isActive ? "#1d4ed8" : "#666666"} weight="duotone" />
      <p className={isActive ? "text-blue-600" : "text-gray-500"}>{name}</p>
    </Link>
  );
}
