import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import apiClient from '@/api/client'
import Header from '@/components/Header'
import type { Exam } from '@/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const SUBJECTS = ['国語', '数学', '英語', '物理', '化学', '地理', '歴史']
const COLORS = [
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 159, 64)',
  'rgb(201, 203, 207)',
]

export default function GraphPage() {
  const { user } = useAuth()
  const [exams, setExams] = useState<Exam[]>([])

  useEffect(() => {
    const fetchExams = async () => {
      const response = await apiClient.get(`/students/${user?.id}/exams`)
      setExams(response.data)
    }
    fetchExams()
  }, [user])

  const labels = exams.map((exam) => exam.exam_name)

  const datasets = SUBJECTS.map((subject, index) => ({
    label: subject,
    data: exams.map((exam) => {
      const result = exam.exam_results.find((r) => r.subject === subject)
      return result ? result.score : null
    }),
    borderColor: COLORS[index],
    backgroundColor: COLORS[index],
    spanGaps: true,
  }))

  const data = { labels, datasets }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: {
        display: true,
        text: '成績推移グラフ',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }

  return (
    <>
      <Header />
      <div className="p-5">
        <Line data={data} options={options} />
      </div>
    </>
  )
}