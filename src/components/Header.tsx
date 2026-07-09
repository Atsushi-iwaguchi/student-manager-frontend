import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  //ログアウト操作とその後ログインページに遷移
  const HandleLogout = () => {
    logout();
    navigate("/login");
  };
  return(
    <div className="p-2">
        <header className="bg-gray-200 flex items-center justify-between">
          <Button className="m-2 bg-gray-200" variant="outline" onClick={() => navigate("/dashboard")}>Student Manager</Button>
          <Button className="m-2" variant="outline" onClick={HandleLogout}>ログアウト</Button>
        </header>
      </div>
  )
}
