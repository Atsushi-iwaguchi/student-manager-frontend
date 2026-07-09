import apiClient from "@/api/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Exam, ExamResult } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ExamResultPage() {
  //IDを取得する
  const { id } = useParams();
  const { user } = useAuth();

  const [exam, setExam] = useState<Exam | null>(null);
  const [results, setResult] = useState<ExamResult[]>([]);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await apiClient.get(`/students/${user?.id}/exams/${id}`);
      setExam(response.data);
      setResult(response.data.exam_results);
    };
    fetchResult();
  }, [id, user]);

  return (
    <>
      <Header />

      <div>
        <Button>編集</Button>
        <h1>{exam?.exam_name}</h1>
        <p>{exam?.exam_date}</p>
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              {result.subject}: {result.score}点
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
