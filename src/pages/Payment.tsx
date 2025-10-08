import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [showBilling, setShowBilling] = useState(false);
  const [cardType, setCardType] = useState<"visa" | "mastercard" | null>(null);

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value);
    // Detect card type
    if (value.startsWith("4")) {
      setCardType("visa");
    } else if (value.startsWith("5")) {
      setCardType("mastercard");
    } else {
      setCardType(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Randomly navigate to success or decline
    const isSuccess = Math.random() > 0.5;
    navigate(isSuccess ? "/payment-success" : "/payment-declined");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Invoice from %merchant business name%</h2>
            <p className="text-muted-foreground">Billed to %cardholder name%</p>
            <p className="text-muted-foreground">Order ID: %order id%</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Payment details:</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Shop name:</span>
              </div>
              <div className="font-medium">Test Shop</div>
              
              <div>
                <span className="text-muted-foreground">Product description:</span>
              </div>
              <div className="font-medium">Pay for Book holder</div>
              
              <div>
                <span className="text-muted-foreground">Payment amount:</span>
              </div>
              <div className="font-medium">100 USD</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                className="mt-2"
                required
              />
            </div>

            <div className="relative">
              <div 
                className={`p-6 rounded-lg transition-all ${
                  cardType === "visa" 
                    ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white" 
                    : cardType === "mastercard"
                    ? "bg-gradient-to-br from-gray-700 to-gray-900 text-white"
                    : "bg-muted"
                }`}
              >
                <div className="mb-4">
                  <p className="text-sm opacity-80 mb-2">Pay for Book holder</p>
                  <p className="font-semibold">AMOUNT 100 USD</p>
                </div>

                {cardType === "visa" && (
                  <div className="absolute top-6 right-6 text-4xl font-bold">VISA</div>
                )}
                {cardType === "mastercard" && (
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-[-8px]">
                      <div className="w-10 h-10 rounded-full bg-red-500" />
                      <div className="w-10 h-10 rounded-full bg-yellow-500 -ml-4" />
                    </div>
                    <p className="text-xs mt-1">mastercard</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <Label className={cardType ? "text-white" : ""}>CARD NUMBER</Label>
                    <Input
                      placeholder="XXXX XXXX XXX XXXX"
                      value={cardNumber}
                      onChange={(e) => handleCardNumberChange(e.target.value)}
                      className={cardType ? "bg-white/20 text-white placeholder:text-white/60 border-white/30" : ""}
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <Label className={cardType ? "text-white" : ""}>CARDHOLDER NAME</Label>
                      <Input
                        placeholder="CARDHOLDER NAME"
                        className={cardType ? "bg-white/20 text-white placeholder:text-white/60 border-white/30" : ""}
                        required
                      />
                    </div>
                    <div>
                      <Label className={cardType ? "text-white" : ""}>EXPIRATION</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="MM"
                          maxLength={2}
                          className={cardType ? "bg-white/20 text-white placeholder:text-white/60 border-white/30" : ""}
                          required
                        />
                        <Input
                          placeholder="YY"
                          maxLength={2}
                          className={cardType ? "bg-white/20 text-white placeholder:text-white/60 border-white/30" : ""}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                <div className="w-24 h-32 bg-muted rounded-lg border-2 border-border">
                  <div className="w-full h-8 bg-foreground mt-4"></div>
                  <div className="px-3 mt-8">
                    <Label className="text-xs">CVC/CVV2</Label>
                    <Input
                      placeholder="XXX"
                      maxLength={3}
                      className="mt-2 h-8 text-center"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-12">
              Powered by <span className="font-semibold">SecureFuturePay</span>
            </p>

            {!showBilling && (
              <Button
                type="button"
                variant="link"
                onClick={() => setShowBilling(true)}
                className="w-full"
              >
                + Add billing address
              </Button>
            )}

            {showBilling && (
              <div className="space-y-4 p-4 bg-secondary/30 rounded-lg">
                <h4 className="font-semibold">Billing address</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input placeholder="Jon" className="mt-2" />
                  </div>
                  <div>
                    <Label>Surname</Label>
                    <Input placeholder="Doe" className="mt-2" />
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" className="w-full">
              Pay
            </Button>

            <div className="flex justify-center gap-4 mt-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
              <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs font-semibold">PCI DSS</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
