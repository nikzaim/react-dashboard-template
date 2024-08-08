import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orders")({
  component: () => <div>Hello /order!</div>,
});
