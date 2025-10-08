import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { X, Plus, User, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

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

          <div className="flex gap-6">
            {/* Left side - Date Filter Panel */}
            {showDateFilter && (
              <div className="w-80 bg-card rounded-lg border border-border p-6 shadow-sm animate-fade-in h-fit">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground mb-4">Filter by: date and time</h3>

                  <Select defaultValue="between">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card z-50">
                      <SelectItem value="between">Is between</SelectItem>
                      <SelectItem value="before">Before</SelectItem>
                      <SelectItem value="after">After</SelectItem>
                    </SelectContent>
                  </Select>

                  <div>
                    <label className="text-sm font-medium mb-2 block">From</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !dateFrom && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateFrom ? format(dateFrom, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={dateFrom}
                          onSelect={setDateFrom}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">To</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !dateTo && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateTo ? format(dateTo, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={dateTo}
                          onSelect={setDateTo}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <Button className="w-full">Apply</Button>
                </div>
              </div>
            )}

            {/* Right side - Main content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <Button 
                  variant={showDateFilter ? "default" : "outline"}
                  size="sm" 
                  className="rounded-full"
                  onClick={() => setShowDateFilter(!showDateFilter)}
                >
                  {showDateFilter ? (
                    <>
                      <span>{dateRange}</span>
                      <X className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    <>
                      <span>{dateRange}</span>
                      <X className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                
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
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card z-50" align="start">
                    <DropdownMenuItem className="cursor-pointer">
                      <Plus className="w-4 h-4 mr-2" />
                      Amount
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Plus className="w-4 h-4 mr-2" />
                      Currency
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Plus className="w-4 h-4 mr-2" />
                      Card Mask
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
