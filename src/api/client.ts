import axios from "axios";

//毎回http.../v1を書かなくていいように
//apiClient.get("/exams")と書くだけでrailsのAPIにアクセスできる
const apiClient = axios.create({
  baseURL: "student-manager-backend-production-ad2e.up.railway.app/api/v1",
});

//interceptorでJWTを自動でつける仕組みを追加している
apiClient.interceptors.request.use((config) => {

  //ローカルストレージから保存しておいたトークンを取得する
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
