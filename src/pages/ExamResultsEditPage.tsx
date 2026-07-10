import apiClient from "@/api/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ExamResultEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");
  const [deviation, setDeviation] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await apiClient.post(`/students/${user?.id}/exams/${id}/exam_results`, {
        exam_result: {
          subject,
          score: Number(score),
          deviation: Number(deviation),
        },
      });
      navigate(`/exams/${id}/results`);
    } catch {
      setError("登録に失敗しました");
    }
  };
  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="text-xl font-bold mb-4">成績入力</h1>
        <form onSubmit={HandleSubmit} className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="subject">科目</Label>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="数学"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="score">点数</Label>
            <Input
              id="score"
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="80"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deviation">偏差値</Label>
            <Input
              id="deviation"
              type="number"
              value={deviation}
              onChange={(e) => setDeviation(e.target.value)}
              placeholder="55"
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
