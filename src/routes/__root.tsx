import { HeaderLeft, HeaderRight } from "@/components/Header";
import { SidebarDesktop } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";

import { ScrollArea } from "@/components/ui/scroll-area";

import { createRootRoute, Outlet, useLocation, useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  return !isLoginRoute ? (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-white dark:bg-black md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center bg-primary border-b px-4 lg:h-[60px] lg:px-6">
              <HeaderLeft />
            </div>
            <div className="flex-1">
              <SidebarDesktop />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <HeaderRight />
          <ScrollArea className="h-[calc(100vh-60px)] w-full rounded-md">
            <main className="">
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
    </ThemeProvider>
  ) : (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex justify-center items-center">
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  );
}
