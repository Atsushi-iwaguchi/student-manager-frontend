import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Dashboard from "@/pages/Dashboard"
import RegisterPage from "./pages/RegisterPage";
import ExamsPage from "./pages/ExamsPage";
import ExamsNewPage from "./pages/ExamsNewPage";
import ExamResultPage from "./pages/ExamResultPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/exams" element={<ExamsPage />} />
      <Route path="/exams/new" element={<ExamsNewPage />} />
      <Route path="/exams/:id/results" element={<ExamResultPage />} />
    </Routes>
  );
}
