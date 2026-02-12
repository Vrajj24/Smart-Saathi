"use client"

import { useState } from "react"
import { Play, Download, Clock, BookOpen, ChevronRight, X } from "lucide-react"
import Layout from "./Layout"

const Lessons = ({ userData, onLogout, onNavigate, currentPage }) => {
  const [selectedGrade, setSelectedGrade] = useState(1)
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLesson, setSelectedLesson] = useState(null)

  const subjects = ["all", "Mathematics", "English", "Science", "Social Studies"]
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const lessons = [
    // Grade 1 Lessons
    {
      id: 1,
      title: "Basic Addition and Subtraction",
      subject: "Mathematics",
      grade: 1,
      duration: "15 min",
      description: "Learn the fundamentals of adding and subtracting numbers",
      downloaded: true,
      completed: true,
      thumbnail: "https://img.youtube.com/vi/7J1OkxuyLD0/hqdefault.jpg",
      videoId: "7J1OkxuyLD0", // Khan Academy: Addition and subtraction within 20
      videoUrl: "https://youtu.be/7J1OkxuyLD0",
    },
    {
      id: 2,
      title: "Alphabet Recognition",
      subject: "English",
      grade: 1,
      duration: "12 min",
      description: "Identify and pronounce letters of the alphabet",
      downloaded: true, 
      completed: false,
      thumbnail: "https://img.youtube.com/vi/abxA_XtnRSc/hqdefault.jpg",
      videoId: "abxA_XtnRSc", // ABC Song - Alphabet Learning
      videoUrl: "https://youtu.be/abxA_XtnRSc",
    },
    {
      id: 3,
      title: "Plants Around Us",
      subject: "Science",
      grade: 1,
      duration: "18 min",
      description: "Discover different types of plants in our environment",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/RJgB0g8OJ9E/hqdefault.jpg",
      videoId: "RJgB0g8OJ9E", // Crash Course Kids: Plants
      videoUrl: "https://youtu.be/RJgB0g8OJ9E",
    },
    {
      id: 4,
      title: "My Family and Friends",
      subject: "Social Studies",
      grade: 1,
      duration: "14 min",
      description: "Understanding relationships and community",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/2KaFP8sHmcE/hqdefault.jpg",
      videoId: "2KaFP8sHmcE", // Family and Community Learning
      videoUrl: "https://youtu.be/2KaFP8sHmcE",
    },
    // Grade 2 Lessons
    {
      id: 5,
      title: "Multiplication Tables",
      subject: "Mathematics",
      grade: 2,
      duration: "20 min",
      description: "Learn multiplication tables from 2 to 5",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/31EWk2V1cNE/hqdefault.jpg",
      videoId: "oPINS56lDes", // Khan Academy: Multiplication basics
      videoUrl: "https://youtu.be/oPINS56lDes",
    },
    {
      id: 6,
      title: "Reading Simple Stories",
      subject: "English",
      grade: 2,
      duration: "16 min",
      description: "Read and understand simple story books",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/31EWk2V1cNE/hqdefault.jpg",
      videoId: "31EWk2V1cNE", // Reading Comprehension for Kids
      videoUrl: "https://youtu.be/31EWk2V1cNE",
    },
    // Grade 3 Lessons
    {
      id: 7,
      title: "Division Basics",
      subject: "Mathematics",
      grade: 3,
      duration: "22 min",
      description: "Understanding division and sharing equally",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/KGMf314LUc0/hqdefault.jpg",
      videoId: "KGMf314LUc0", // Khan Academy: Division basics
      videoUrl: "https://youtu.be/KGMf314LUc0",
    },
    {
      id: 8,
      title: "Grammar Fundamentals",
      subject: "English",
      grade: 3,
      duration: "18 min",
      description: "Learn about nouns, verbs, and adjectives",
      downloaded: false,
      completed: false,
      thumbnail: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400",
      videoId: "QLPHpuODKEM", // Grammar Basics: Nouns, Verbs, Adjectives
      videoUrl: "https://youtu.be/QLPHpuODKEM",
    },
    // Grade 4 Lessons
    {
      id: 9,
      title: "Fractions Introduction",
      subject: "Mathematics",
      grade: 4,
      duration: "25 min",
      description: "Understanding parts of a whole with fractions",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/QLPHpuODKEM/hqdefault.jpg",
      videoId: "M44FkZDoclU", // Khan Academy: Fractions introduction
      videoUrl: "https://youtu.be/M44FkZDoclU",
    },
    {
      id: 10,
      title: "Water Cycle",
      subject: "Science",
      grade: 4,
      duration: "20 min",
      description: "Learn how water moves through the environment",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/TD3XSIE4ymo/hqdefault.jpg",
      videoId: "TD3XSIE4ymo", // Crash Course Kids: Water Cycle
      videoUrl: "https://youtu.be/TD3XSIE4ymo",
    },
    // Grade 5 Lessons
    {
      id: 11,
      title: "Decimal Numbers",
      subject: "Mathematics",
      grade: 5,
      duration: "28 min",
      description: "Working with decimal points and place values",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/LFO07qWWtrs/hqdefault.jpg",
      videoId: "LFO07qWWtrs", // Khan Academy: Decimal place value
      videoUrl: "https://youtu.be/LFO07qWWtrs",
    },
    {
      id: 12,
      title: "Essay Writing",
      subject: "English",
      grade: 5,
      duration: "24 min",
      description: "Learn to write structured essays and paragraphs",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/IwhmzPsVVIo/hqdefault.jpg",
      videoId: "IwhmzPsVVIo", // Essay Writing for Kids
      videoUrl: "https://youtu.be/IwhmzPsVVIo",
    },
    // Grade 6 Lessons
    {
      id: 13,
      title: "Algebra Basics",
      subject: "Mathematics",
      grade: 6,
      duration: "30 min",
      description: "Introduction to variables and simple equations",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/l3XzepN03KQ/hqdefault.jpg",
      videoId: "l3XzepN03KQ", // Khan Academy: Algebra basics
      videoUrl: "https://youtu.be/l3XzepN03KQ",
    },
    {
      id: 14,
      title: "Human Body Systems",
      subject: "Science",
      grade: 6,
      duration: "26 min",
      description: "Understanding digestive and respiratory systems",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/SGdEw256kpU/hqdefault.jpg",
      videoId: "SGdEw256kpU", // Crash Course Kids: Human Body Systems
      videoUrl: "https://youtu.be/SGdEw256kpU",
    },
    // Grade 7 Lessons
    {
      id: 15,
      title: "Geometry Shapes",
      subject: "Mathematics",
      grade: 7,
      duration: "32 min",
      description: "Properties of triangles, circles, and polygons",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/qiUJ70MeR8A/hqdefault.jpg",
      videoId: "qiUJ70MeR8A", // Khan Academy: Geometry basics
      videoUrl: "https://youtu.be/qiUJ70MeR8A",
    },
    {
      id: 16,
      title: "Indian History",
      subject: "Social Studies",
      grade: 7,
      duration: "28 min",
      description: "Ancient civilizations and medieval period",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/O5jyhEuOmEQ/hqdefault.jpg",
      videoId: "O5jyhEuOmEQ", // Indian History Overview
      videoUrl: "https://youtu.be/O5jyhEuOmEQ",
    },
    // Grade 8 Lessons
    {
      id: 17,
      title: "Linear Equations",
      subject: "Mathematics",
      grade: 8,
      duration: "35 min",
      description: "Solving equations with one and two variables",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/bDwJD_V8nKE/hqdefault.jpg",
      videoId: "bDwJD_V8nKE", // Khan Academy: Linear equations
      videoUrl: "https://youtu.be/bDwJD_V8nKE",
    },
    {
      id: 18,
      title: "Chemical Reactions",
      subject: "Science",
      grade: 8,
      duration: "30 min",
      description: "Understanding acids, bases, and chemical changes",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/kvVQytWTEBg/hqdefault.jpg",
      videoId: "kvVQytWTEBg", // Crash Course: Chemical Reactions
      videoUrl: "https://youtu.be/kvVQytWTEBg",
    },
    // Grade 9 Lessons
    {
      id: 19,
      title: "Quadratic Equations",
      subject: "Mathematics",
      grade: 9,
      duration: "38 min",
      description: "Solving quadratic equations using different methods",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/JvfOwEWqL6I/hqdefault.jpg",
      videoId: "JvfOwEWqL6I", // Khan Academy: Quadratic equations
      videoUrl: "https://youtu.be/JvfOwEWqL6I",
    },
    {
      id: 20,
      title: "Literature Analysis",
      subject: "English",
      grade: 9,
      duration: "34 min",
      description: "Analyzing poems and prose for deeper meaning",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/1J51KFKzHr4/hqdefault.jpg",
      videoId: "1J51KFKzHr4", // Literature Analysis Techniques
      videoUrl: "https://youtu.be/1J51KFKzHr4",
    },
    // Grade 10 Lessons
    {
      id: 21,
      title: "Trigonometry",
      subject: "Mathematics",
      grade: 10,
      duration: "40 min",
      description: "Understanding sine, cosine, and tangent ratios",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/F0ZVYt2xvU0/hqdefault.jpg",
      videoId: "F0ZVYt2xvU0", // Khan Academy: Trigonometry basics
      videoUrl: "https://youtu.be/F0ZVYt2xvU0",
    },
    {
      id: 22,
      title: "Genetics and Heredity",
      subject: "Science",
      grade: 10,
      duration: "36 min",
      description: "How traits are passed from parents to offspring",
      downloaded: false,
      completed: false,
      thumbnail: "https://img.youtube.com/vi/JTPaOkpq19Y/hqdefault.jpg",
      videoId: "VZr8vhfLgZ8", // Crash Course: Genetics and Heredity
      videoUrl: "https://youtu.be/JTPaOkpq19Y",
    },
  ]

  const filteredLessons = lessons.filter(
    (lesson) =>
      lesson.grade === selectedGrade &&
      (selectedSubject === "all" || lesson.subject === selectedSubject) &&
      (searchTerm === "" ||
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleWatchVideo = (lesson) => {
    setSelectedLesson(lesson)
    // Redirect to YouTube video in new tab
    window.open(`https://www.youtube.com/watch?v=${lesson.videoId}`, "_blank")
  }

  const handleCloseVideo = () => {
    setSelectedLesson(null)
  }

  return (
    <Layout currentPage="lessons" onNavigate={onNavigate} onLogout={onLogout}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Video Lessons</h2>
          <div className="text-sm text-gray-600">All lessons include subtitles and are optimized for low-bandwidth</div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Lessons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Grade</label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              >
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    Grade {grade}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Lessons</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title or description..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={lesson.thumbnail || "/placeholder.svg"}
                  alt={lesson.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {lesson.downloaded && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Downloaded</div>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  <Clock className="inline h-4 w-4 mr-1" />
                  {lesson.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {lesson.subject}
                  </span>
                  {lesson.completed && (
                    <div className="text-green-600">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleWatchVideo(lesson)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    <span>Watch</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Download className="h-5 w-5" />
                    </button>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No lessons found</h3>
            <p className="text-gray-600">Try selecting a different grade or subject combination.</p>
          </div>
        )}

        {selectedLesson && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">{selectedLesson.title}</h3>
                <button onClick={handleCloseVideo} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`${selectedLesson.videoUrl}?autoplay=1`}
                  title={selectedLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Lessons
