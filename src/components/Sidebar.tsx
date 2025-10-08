import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  CreditCard, 
  Wallet, 
  ArrowRightLeft, 
  FileText, 
  Banknote, 
  BarChart3,
  Terminal 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Cards", href: "/cards", icon: CreditCard },
  { name: "P2P Wallet", href: "/p2p-wallet", icon: Wallet },
  { name: "P2P Payment", href: "/p2p-payment", icon: ArrowRightLeft },
  { name: "WirePayments", href: "/wire-payments", icon: FileText },
  { name: "Virtual Terminal", href: "/virtual-terminal", icon: Terminal },
  { name: "Payout", href: "/payout", icon: Banknote, hasDropdown: true },
  { name: "Reports", href: "/reports", icon: BarChart3 },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-lg font-bold text-accent-foreground">P</span>
          </div>
          <span className="text-lg font-semibold text-sidebar-foreground">SFP Test</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
              {item.hasDropdown && (
                <span className="ml-auto text-xs">▼</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
