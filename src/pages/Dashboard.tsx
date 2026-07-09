import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="p-5">
        <p className="mb-5">{user?.name}さん今日も頑張りましょう！</p>
        <ul className="flex gap-4">
          <li>
            <Button variant="outline" className="w-48 h-18" onClick={() => navigate("/exams")}>
              模試成績一覧
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-48 h-18">
              過去の面談
            </Button>
          </li>
          <li>
            <Button variant="outline" className="w-48 h-18">
              面談予約
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
