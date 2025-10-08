import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/cards");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-xl shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-foreground">P</span>
            </div>
            <span className="text-2xl font-bold text-foreground">articolar</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="login" className="text-sm font-medium">
              Login
            </Label>
            <Input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="px-8">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
