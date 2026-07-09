import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Dashboard from "@/pages/Dashboard"
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
