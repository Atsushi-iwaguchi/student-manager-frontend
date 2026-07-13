# Student Manager Frontend

## 概要
塾講師としての経験をもとに開発した、学習塾向け生徒管理アプリのフロントエンドです。

## 機能
- ログイン・新規登録・ログアウト
- ロールによる画面切り替え(student/teacher)
- 模試結果の登録・閲覧・削除
- 講師用の全生徒一覧

## 技術スタック
| 技術 | バージョン |
|---|---|
| React | 19 |
| TypeScript | - |
| Vite | 8 |
| TailwindCSS | 4 |
| shadcn/ui | - |
| React Router | - |
| Axios | - |

## インフラ
- フロントエンド: Vercel

## ローカル起動方法

### 前提条件
- Node.js

### セットアップ

```bash
git clone https://github.com/Atsushi-iwaguchi/student-manager-frontend
cd student-manager-frontend
npm install
npm run dev
```

### 環境変数
`.env`ファイルをルートに作成してください。
VITE_API_URL=http://localhost:3000/api/v1

## 画面構成
| パス | 説明 |
|---|---|
| /login | ログインページ |
| /register | 新規登録ページ |
| /dashboard | 生徒用ダッシュボード |
| /teacher | 講師用ダッシュボード |
| /exams | 模試一覧 |
| /exams/new | 模試登録 |
| /exams/:id/results | 模試詳細・成績一覧 |
| /exams/:id/edit | 成績入力 |
