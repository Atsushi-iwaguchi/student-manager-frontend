import apiClient from "@/api/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import type { Exam } from "@/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExamsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      const response = await apiClient.get(`/students/${user?.id}/exams`);
      setExams(response.data);
    };
    fetchExams();
  }, [user]);

  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="mt-2 mb-2">模試成績一覧</h1>
        <Button className="m-2" onClick={() => navigate("/exams/new")}>
          <Plus className="mr-2 h-4 w-4" />
          新規登録
        </Button>
        <ul>
          {exams.map((exam) => (
            <Card
              onClick={() => navigate(`/exams/${exam.id}/results`)}
              className="m-2 p-3 cursor-pointer"
              key={exam.id}
            >
              {exam.exam_name}
            </Card>
          ))}
        </ul>
      </div>
    </>
  );
}
