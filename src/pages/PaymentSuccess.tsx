import { CheckCircle2, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 text-center border-b border-border">
            <h2 className="text-2xl font-semibold mb-2">Invoice from %merchant business name%</h2>
            <p className="text-muted-foreground">Billed to %cardholder name%</p>
            <p className="text-muted-foreground">Order ID: %order id%</p>
          </div>

          <div className="bg-white p-12 flex flex-col items-center justify-center border-b border-border">
            <CreditCard className="w-16 h-16 text-success mb-4" />
            <h3 className="text-2xl font-semibold text-success mb-4">Payment successful</h3>
            <p className="text-lg text-muted-foreground">%cur% %amount% paid %date%</p>
          </div>

          <div className="p-8">
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <span className="font-semibold">Transaction ID:</span>
                <span className="text-muted-foreground">%token%</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <span className="font-semibold">Transaction date:</span>
                <span className="text-muted-foreground">%datetime%</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <span className="font-semibold">Description:</span>
                <span className="text-muted-foreground">%product%</span>
              </div>
            </div>

            <div className="bg-secondary/30 p-4 rounded-lg mb-8 text-sm text-center">
              <p className="mb-2">If you have any questions about the product or delivery terms,</p>
              <p className="mb-2">aslo if you need the refund you can contact</p>
              <p>the merchant directly.</p>
              <p className="mt-4">If you have any questions about the transaction status you can</p>
              <p>
                contact our support team directly vie email{" "}
                <a href="mailto:support@securefuturepay.com" className="text-primary underline">
                  support@securefuturepay.com
                </a>
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
              <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs font-semibold">PCI DSS</div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/cards">
                <Button>Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
