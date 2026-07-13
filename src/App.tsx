import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Dashboard from "@/pages/Dashboard"
import RegisterPage from "./pages/RegisterPage";
import ExamsPage from "./pages/ExamsPage";
import ExamsNewPage from "./pages/ExamsNewPage";
import ExamResultPage from "./pages/ExamResultPage";
import ExamResultEditPage from "./pages/ExamResultsEditPage";
import PrivateRoute from "./components/PrivateRoute";
import TeacherPage from "./TeacherPage";
import GraphPage from "./pages/GraphPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/exams" element={<PrivateRoute><ExamsPage /></PrivateRoute>} />
      <Route path="/exams/new" element={<PrivateRoute><ExamsNewPage /></PrivateRoute>} />
      <Route path="/exams/:id/results" element={<PrivateRoute><ExamResultPage /></PrivateRoute>} />
      <Route path="/exams/:id/edit" element={<PrivateRoute><ExamResultEditPage /></PrivateRoute>} />
      <Route path="/teacher" element={<PrivateRoute><TeacherPage /></PrivateRoute>} />
      <Route path="/graph" element={<PrivateRoute><GraphPage /></PrivateRoute>} />
    </Routes>
  );
}
