import { Icon, Package, SquaresFour, Lego, UsersThree, ChartDonut } from "@phosphor-icons/react";
import { Link, useRouter } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface NavbarItemProps {
  to: string;
  name: string;
  Icon: Icon;
}

const items = [
  { id: 1, name: "Dashboard", to: "/", Icon: SquaresFour },
  { id: 2, name: "Orders", to: "/orders", Icon: Package },
  { id: 3, name: "Products", to: "/products", Icon: Lego },
  { id: 4, name: "Customers", to: "#", Icon: UsersThree },
  { id: 5, name: "Analytics", to: "#", Icon: ChartDonut },
  // Add more items here as needed
];

export function NavbarItem({ to, name, Icon }: NavbarItemProps) {
  const router = useRouter();
  const isActive = router.state.location.pathname === to;

  return (
    <Link to={to} className={isActive ? "flex items-center gap-3 px-3 py-2 text-primary bg-muted/40 rounded-lg" : "flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary"}>
      <Icon size={24} color={isActive ? "#f97316" : "#858585"} weight="duotone" />
      <p className={isActive ? "text-primary" : "text-[#858585]"}>{name}</p>
    </Link>
  );
}

export const SidebarDesktop = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {items.map((item) => (
        <NavbarItem key={item.name} to={item.to} name={item.name} Icon={item.Icon} />
      ))}
    </nav>
  );
};

export const SidebarMobile = () => {
  return (
    <>
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
    </>
  );
};
