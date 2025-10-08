import Sidebar from "@/components/Sidebar";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Total Transactions</h3>
              <p className="text-3xl font-bold text-primary">1,234</p>
              <p className="text-sm text-muted-foreground mt-2">+12% from last month</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-success">$45,678</p>
              <p className="text-sm text-muted-foreground mt-2">+8% from last month</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
              <p className="text-3xl font-bold text-accent">96.5%</p>
              <p className="text-sm text-muted-foreground mt-2">+2% from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
