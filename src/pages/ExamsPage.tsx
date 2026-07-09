import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ExamsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div>
        <ul>
          <li>第1回全国模試</li>
        </ul>
      </div>
      <div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          新規登録
        </Button>
      </div>
    </>
  );
}
