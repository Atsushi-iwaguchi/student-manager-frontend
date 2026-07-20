import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const MenuItems = [
    { label: "模試成績一覧", path: "/exams" },
    { label: "成績グラフ", path: "/graph" },
    { label: "過去の面談", path: "/interview" },
    { label: "面談予約", path: "/reservation" },
  ];

  return (
    <>
      <Header />

      <div className="p-5">
        <p className="mb-5">{user?.name}さん今日も頑張りましょう！</p>
        <ul className="flex gap-4 flex-wrap justify-center">
          {MenuItems.map((item) => (
            <li key={item.path}>
              <Button
                variant="outline"
                className="w-48 h-18"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
