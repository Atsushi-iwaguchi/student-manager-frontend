import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import apiClient from "@/api/client";
import type { AuthResponse } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await apiClient.post<AuthResponse>("/signin", {
        email,
        password,
      });
      login(response.data.user, response.data.token);

      // roleによってリダイレクト先を分岐
      if (response.data.user.role === "teacher") {
        navigate("/teacher");
      } else {
        navigate("/dashboard");
      }
    } catch {
      setError("メールアドレスまたはパスワードが正しくありません");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="mt-2 text-2xl text-center">ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col items-center mb-4 "
          >
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                className="w-82 h-10"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="password">パスワード</Label>
              <Input
                className="w-82 h-10"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex justify-center ">
              <Button type="submit" className="w-82 h-10">
                ログインする
              </Button>
            </div>
          </form>
          <hr className="w-full border-gray-300 my-3" />
          <div className="flex justify-center p-2">
            <Link to="/register" className="text-sm underline text-olive-900">
              新規登録はこちら
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
