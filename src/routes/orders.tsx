import { createFileRoute } from "@tanstack/react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { DataTable } from "@/components/orders/data-table";
import { columns, Payment } from "@/components/orders/columns";

export const Route = createFileRoute("/orders")({
  component: OrdersComponent,
});

function OrdersComponent() {
  const data: Payment[] = [
    {
      id: "1f3e7b2c",
      amount: 250,
      status: "completed",
      email: "alice@example.com",
    },
    {
      id: "2a6e8f5d",
      amount: 175,
      status: "pending",
      email: "bob@example.com",
    },
    {
      id: "3c8a9d4e",
      amount: 300,
      status: "failed",
      email: "carol@example.com",
    },
    {
      id: "4e2b6c7f",
      amount: 50,
      status: "completed",
      email: "dave@example.com",
    },
    {
      id: "5b7d9e0a",
      amount: 125,
      status: "pending",
      email: "eve@example.com",
    },
    {
      id: "6f1a3c8b",
      amount: 400,
      status: "completed",
      email: "frank@example.com",
    },
    {
      id: "7d4e9f1c",
      amount: 220,
      status: "failed",
      email: "grace@example.com",
    },
    {
      id: "8b3e7c6d",
      amount: 95,
      status: "completed",
      email: "henry@example.com",
    },
    {
      id: "9a5c7d8e",
      amount: 310,
      status: "pending",
      email: "ivy@example.com",
    },
    {
      id: "0f2e3a7b",
      amount: 180,
      status: "failed",
      email: "jack@example.com",
    },
    {
      id: "1c7a9b5d",
      amount: 275,
      status: "completed",
      email: "kate@example.com",
    },
    {
      id: "2f4d6e3c",
      amount: 360,
      status: "pending",
      email: "leo@example.com",
    },
    {
      id: "3b8e2a1f",
      amount: 210,
      status: "completed",
      email: "mike@example.com",
    },
    {
      id: "4d6c9f3e",
      amount: 50,
      status: "failed",
      email: "nina@example.com",
    },
    {
      id: "5a1b7c0d",
      amount: 145,
      status: "completed",
      email: "oliver@example.com",
    },
    {
      id: "6e3f2a9b",
      amount: 280,
      status: "pending",
      email: "paul@example.com",
    },
    {
      id: "7b9d4e5c",
      amount: 390,
      status: "failed",
      email: "quinn@example.com",
    },
    {
      id: "8c2a6f7d",
      amount: 200,
      status: "completed",
      email: "rose@example.com",
    },
    {
      id: "9f4b8e3a",
      amount: 75,
      status: "pending",
      email: "sam@example.com",
    },
    {
      id: "0e1d2c7f",
      amount: 320,
      status: "failed",
      email: "tina@example.com",
    },
    {
      id: "1a3e7b9c",
      amount: 260,
      status: "completed",
      email: "uma@example.com",
    },
    {
      id: "2d6f1a8e",
      amount: 180,
      status: "pending",
      email: "vince@example.com",
    },
    {
      id: "3c9a4d5b",
      amount: 270,
      status: "completed",
      email: "will@example.com",
    },
    {
      id: "4e2b3f6c",
      amount: 110,
      status: "failed",
      email: "xena@example.com",
    },
    {
      id: "5b7e9a0d",
      amount: 230,
      status: "completed",
      email: "yuri@example.com",
    },
    {
      id: "6f1c8d7b",
      amount: 150,
      status: "pending",
      email: "zane@example.com",
    },
    {
      id: "7d4e3f2a",
      amount: 340,
      status: "completed",
      email: "amy@example.com",
    },
    {
      id: "8b3c9e1d",
      amount: 90,
      status: "failed",
      email: "ben@example.com",
    },
    {
      id: "9a5e7c4f",
      amount: 190,
      status: "completed",
      email: "claire@example.com",
    },
    {
      id: "0f2a6b9d",
      amount: 300,
      status: "pending",
      email: "dan@example.com",
    },
    {
      id: "1c7f4e3b",
      amount: 250,
      status: "completed",
      email: "ella@example.com",
    },
    {
      id: "2f4b8c0e",
      amount: 135,
      status: "failed",
      email: "finn@example.com",
    },
    {
      id: "3b8d2f7c",
      amount: 290,
      status: "completed",
      email: "gina@example.com",
    },
    {
      id: "4d6a1e9f",
      amount: 80,
      status: "pending",
      email: "hank@example.com",
    },
    {
      id: "5a1c7b8e",
      amount: 160,
      status: "completed",
      email: "iris@example.com",
    },
    {
      id: "6e3f9a4b",
      amount: 375,
      status: "failed",
      email: "jane@example.com",
    },
    {
      id: "7b9e4d3c",
      amount: 210,
      status: "completed",
      email: "kyle@example.com",
    },
    {
      id: "8c2b6f1a",
      amount: 135,
      status: "pending",
      email: "lara@example.com",
    },
    {
      id: "9f4c7e5b",
      amount: 310,
      status: "completed",
      email: "mark@example.com",
    },
    {
      id: "0e1a3c8d",
      amount: 70,
      status: "failed",
      email: "nora@example.com",
    },
    {
      id: "1a3f7b4e",
      amount: 280,
      status: "completed",
      email: "owen@example.com",
    },
    {
      id: "2d6b1f9c",
      amount: 120,
      status: "pending",
      email: "pete@example.com",
    },
    {
      id: "3c9e2a7b",
      amount: 340,
      status: "completed",
      email: "quincy@example.com",
    },
    {
      id: "4e2c9b0f",
      amount: 100,
      status: "failed",
      email: "rita@example.com",
    },
    {
      id: "5b7f8d1a",
      amount: 220,
      status: "completed",
      email: "steve@example.com",
    },
    {
      id: "6f1e4c7b",
      amount: 180,
      status: "pending",
      email: "tess@example.com",
    },
    {
      id: "7d4f3b9e",
      amount: 370,
      status: "failed",
      email: "uma@example.com",
    },
    {
      id: "8b3d7a6c",
      amount: 270,
      status: "completed",
      email: "vince@example.com",
    },
    {
      id: "9a5b1e4d",
      amount: 90,
      status: "pending",
      email: "wade@example.com",
    },
    {
      id: "0f2c6f3e",
      amount: 200,
      status: "completed",
      email: "xena@example.com",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex">
          <h1 className="text-xl font-medium">Orders</h1>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
