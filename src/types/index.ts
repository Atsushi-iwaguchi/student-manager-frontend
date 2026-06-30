export type Role = 'student' | 'teacher'

export interface User {
    id: number
    email: string
    name: string
    role: Role
    target_school?: string
    grade?: string
}

export interface ExamResult {
    id: number
    exam_id: number
    subject: string
    score: number
    deviation: number | null
    created_at: string
    updated_at: string
}

export interface Exam {
    id: number
    user_id: number
    exam_name: string
    exam_date: string
    created_at: string
    updated_at: string
    exam_results: ExamResult[]
}

export interface AuthResponse {
    user: User
    token: string
}