import apiClient from "@/api/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Exam, ExamResult } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ExamResultPage() {
  //IDを取得する
  const { id } = useParams();
  const { user } = useAuth();

  const navigate = useNavigate();

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

  const HandleDelete = async (resultId: number) => {
    try {
      await apiClient.delete(`/exams/${id}/exam_results/${resultId}`);
      //filterを使ってstateから取り除く
      setResult(results.filter((result) => result.id !== resultId));
    } catch {
      console.error("削除に失敗しました");
    }
  };

  return (
    <>
      <Header />

      <div className="p-5">
        <Button onClick={() => navigate(`/exams/${id}/edit`)}>追加</Button>
        <h1>{exam?.exam_name}</h1>
        <p>{exam?.exam_date}</p>
        <Table>
          <TableHeader>
            <TableRow >
              <TableHead >科目</TableHead>
              <TableHead>点数</TableHead>
              <TableHead>偏差値</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{result.subject}</TableCell>
                <TableCell>{result.score}点</TableCell>
                <TableCell>{result.deviation ?? "-"}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => HandleDelete(result.id)}
                  >
                    削除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
