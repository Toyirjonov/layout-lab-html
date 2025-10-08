import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

const mockData = [
  {
    date: "Sep 29, 2025",
    token: "asda123...",
    orderId: "asda123...",
    type: "Pay",
    cardMask: "****4444",
    status: "Approved",
    email: "asdfg@gmail.com",
    amount: "100.00",
    currency: "USD",
  },
  {
    date: "Jun 24, 2025",
    token: "asda123",
    orderId: "asda123",
    type: "Refund",
    cardMask: "****4433",
    status: "Approved",
    email: "test@test.com",
    amount: "200.00",
    currency: "USD",
  },
  {
    date: "May 6, 2025",
    token: "fwefsd12",
    orderId: "fwefsd12",
    type: "Pay",
    cardMask: "****3322",
    status: "Declined",
    email: "afigfhasafg@sec******",
    amount: "25.12",
    currency: "EUR",
  },
];

const Cards = () => {
  const [dateRange, setDateRange] = useState("10/8/2025 - 10/30/2026");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-semibold text-foreground">Cards</h1>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-full text-sm">
              <span>{dateRange}</span>
              <button className="hover:bg-primary/80 rounded-full p-0.5">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <Button variant="outline" size="sm" className="rounded-full">
              <Plus className="w-4 h-4 mr-1" />
              Token
            </Button>
            
            <Button variant="outline" size="sm" className="rounded-full">
              <Plus className="w-4 h-4 mr-1" />
              Order ID
            </Button>
            
            <Button variant="outline" size="sm" className="rounded-full">
              <Plus className="w-4 h-4 mr-1" />
              Status
            </Button>
            
            <Button variant="outline" size="sm" className="rounded-full">
              <Plus className="w-4 h-4 mr-1" />
              Email
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Plus className="w-4 h-4" />
            </Button>

            <div className="ml-auto">
              <Button className="rounded-full">Export</Button>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Token</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Order ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">CardMask</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="border-t border-border hover:bg-secondary/30">
                      <td className="px-4 py-3 text-sm">{row.date}</td>
                      <td className="px-4 py-3 text-sm">{row.token}</td>
                      <td className="px-4 py-3 text-sm">{row.orderId}</td>
                      <td className="px-4 py-3 text-sm">{row.type}</td>
                      <td className="px-4 py-3 text-sm">{row.cardMask}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={row.status === "Approved" ? "text-success" : "text-destructive"}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{row.email}</td>
                      <td className="px-4 py-3 text-sm">{row.amount}</td>
                      <td className="px-4 py-3 text-sm">{row.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {showFilters && (
            <div className="fixed right-6 top-32 bg-card p-6 rounded-lg shadow-xl border border-border w-80 animate-slide-in-right">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filter by: date and time</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <Select defaultValue="between">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="between">Is between</SelectItem>
                    <SelectItem value="before">Before</SelectItem>
                    <SelectItem value="after">After</SelectItem>
                  </SelectContent>
                </Select>

                <div>
                  <label className="text-sm font-medium mb-2 block">From</label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">To</label>
                  <Input type="date" />
                </div>

                <Button className="w-full">Apply</Button>

                <div className="border-t border-border pt-4 mt-4">
                  <Button variant="link" className="w-full text-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Amount
                  </Button>
                  <Button variant="link" className="w-full text-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Currency
                  </Button>
                  <Button variant="link" className="w-full text-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Card Mask
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
