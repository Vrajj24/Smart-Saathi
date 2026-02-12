import React from 'react';
import { BookOpen, Award, Target, Download, Play, Trophy } from 'lucide-react';
import Layout from './Layout';

// Assuming Layout component is defined elsewhere and handles navigation/logout

// Interface is removed for pure JSX/JavaScript
// const Dashboard: React.FC<DashboardProps> = ({ userData, onLogout, onNavigate, currentPage }) => {

const Dashboard = ({ userData, onLogout, onNavigate, currentPage }) => {
  // TypeScript interfaces for props are removed.
  // The component function signature is simplified.

  const user = userData || {
    name: 'Demo Student',
    grade: 5,
    lessonsCompleted: 15,
    totalLessons: 50,
    progress: 65,
    badges: ['First Lesson', 'Quiz Master']
  };

  const achievements = [
    { name: 'First Lesson', icon: BookOpen, earned: user.badges.includes('First Lesson') },
    { name: 'Quiz Master', icon: Award, earned: user.badges.includes('Quiz Master') },
    { name: 'Week Warrior', icon: Target, earned: false },
    { name: 'Top Scorer', icon: Trophy, earned: false },
  ];

  const recentLessons = [
    { title: 'Mathematics - Basic Addition', duration: '15 min', progress: 100 },
    { title: 'English - Alphabet Recognition', duration: '12 min', progress: 80 },
    { title: 'Science - Plants Around Us', duration: '18 min', progress: 60 },
  ];

  return (
    <Layout
      currentPage={currentPage}
      onNavigate={onNavigate}
      onLogout={onLogout}
    >
      <div className="space-y-6">

        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h2>
            <p className="text-blue-100 text-lg">Grade {user.grade} • Ready to learn something new today?</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Lessons Completed</p>
                <p className="text-3xl font-bold text-gray-900">{user.lessonsCompleted}</p>
                <p className="text-sm text-gray-500">of {user.totalLessons} total</p>
              </div>
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Overall Progress</p>
                <p className="text-3xl font-bold text-gray-900">{user.progress}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${user.progress}%` }}
                  ></div>
                </div>
              </div>
              <Target className="h-12 w-12 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Badges Earned</p>
                <p className="text-3xl font-bold text-gray-900">{user.badges.length}</p>
                <p className="text-sm text-gray-500">Keep collecting!</p>
              </div>
              <Award className="h-12 w-12 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isEarned = achievement.earned;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all ${
                    isEarned
                      ? 'bg-yellow-50 border-2 border-yellow-200'
                      : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${
                    isEarned ? 'text-yellow-600' : 'text-gray-400'
                  }`} />
                  <p className={`text-sm font-medium ${
                    isEarned ? 'text-yellow-800' : 'text-gray-500'
                  }`}>
                    {achievement.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Lessons */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h3>
          <div className="space-y-4">
            {recentLessons.map((lesson, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
                    <p className="text-sm text-gray-600">{lesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{lesson.progress}%</p>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${lesson.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Download className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;