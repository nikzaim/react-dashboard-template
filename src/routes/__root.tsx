import { createRootRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`p-2 flex flex-col gap-2 ${isLoginRoute ? "hidden" : "block"}`}>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
      </div>
      <hr />
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
}
