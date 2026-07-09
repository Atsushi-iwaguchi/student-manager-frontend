import apiClient from "@/api/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
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
        <ul>
          {exams.map((exam) => (
            <li key={exam.id}>{exam.exam_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Button onClick={() => navigate("/exams/new") }>
          <Plus className="mr-2 h-4 w-4" />
          新規登録
        </Button>
      </div>
    </>
  );
}