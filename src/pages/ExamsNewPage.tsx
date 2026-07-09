import apiClient from "@/api/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExamNewPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [error, setError] = useState("");

  const handleExamCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await apiClient.post(`/students/${user?.id}/exams`, {
        exam: {
          exam_name: examName,
          exam_date: examDate,
        },
      });
      navigate("/exams");
    } catch {
      setError("登録に失敗しました");
    }
  };

  return (
    <>
      <Header />
      <div className="p-5">
        <form onSubmit={handleExamCreate} className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="examName">模試名</Label>
            <Input
              id="examName"
              type="text"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              placeholder="第1回全国模試"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="examDate">試験日</Label>
            <Input
              id="examDate"
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full">
            登録する
          </Button>
        </form>
      </div>
    </>
  );
}