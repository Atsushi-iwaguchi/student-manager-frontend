import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  //ログアウト操作とその後ログインページに遷移
  const HandleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div>
        <Button onClick={HandleLogout}>ログアウト</Button>
      </div>

      <div>
        <h1>成績一覧</h1>
      </div>
    </>
  );
}
