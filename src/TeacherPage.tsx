import apiClient from "@/api/client";
import Header from "@/components/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { User } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherPage() {
  const [students, setStudents] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await apiClient.get("/students");
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="text-xl font-bold mb-4">生徒一覧</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>氏名</TableHead>
              <TableHead>メールアドレス</TableHead>
              <TableHead>志望校</TableHead>
              <TableHead>学年</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
                className="cursor-pointer"
                onClick={() => navigate(`/students/${student.id}/exams`)}
              >
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.target_school ?? "-"}</TableCell>
                <TableCell>{student.grade ?? "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}