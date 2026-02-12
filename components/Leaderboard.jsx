import React, { useState } from 'react';
import { Trophy, Medal, Award, Star, Users } from 'lucide-react';
// Re-attempting the correct sibling import path, which worked for Scholarships
import Layout from './Layout'; 

const Leaderboard = ({ userData, onLogout, onNavigate, currentPage }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedGrade, setSelectedGrade] = useState('all');

  const periods = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'all', label: 'All Time' },
  ];

  const grades = [
    { value: 'all', label: 'All Grades' },
    ...Array.from({ length: 10 }, (_, i) => ({
      value: (i + 1).toString(),
      label: `Grade ${i + 1}`,
    })),
  ];

  const leaderboardData = [
    { rank: 1, name: 'Priya Sharma', grade: 5, score: 2450, badges: 12, avatar: 'PS' },
    { rank: 2, name: 'Arjun Patel', grade: 6, score: 2380, badges: 11, avatar: 'AP' },
    { rank: 3, name: 'Sneha Gupta', grade: 4, score: 2290, badges: 10, avatar: 'SG' },
    { rank: 4, name: 'Rahul Kumar', grade: 5, score: 2150, badges: 9, avatar: 'RK' },
    { rank: 5, name: 'Ananya Singh', grade: 7, score: 2080, badges: 8, avatar: 'AS' },
    { rank: 6, name: 'Vikram Reddy', grade: 6, score: 1980, badges: 8, avatar: 'VR' },
    { rank: 7, name: 'Kavya Nair', grade: 4, score: 1920, badges: 7, avatar: 'KN' },
    { rank: 8, name: 'Rohan Das', grade: 5, score: 1850, badges: 7, avatar: 'RD' },
    { rank: 9, name: 'Meera Joshi', grade: 3, score: 1780, badges: 6, avatar: 'MJ' },
    { rank: 10, name: 'Karan Mehta', grade: 6, score: 1720, badges: 6, avatar: 'KM' },
  ];

  const currentUserRank = { rank: 15, name: 'You', grade: 1, score: 1450, badges: 4, avatar: 'YU' };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3:
        return 'bg-gradient-to-r from-amber-400 to-amber-600';
      default:
        return 'bg-gradient-to-r from-blue-400 to-blue-600';
    }
  };

  return (
    <Layout 
      currentPage="leaderboard" 
      onNavigate={onNavigate} 
      onLogout={onLogout}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Leaderboard</h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="h-5 w-5" />
            <span>Compete with your peers</span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>{period.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grade Filter</label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              >
                {grades.map(grade => (
                  <option key={grade.value} value={grade.value}>{grade.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Your Rank Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Your Current Position</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">{currentUserRank.avatar}</span>
              </div>
              <div>
                <p className="text-xl font-semibold">{currentUserRank.name}</p>
                <p className="text-blue-100">Grade {currentUserRank.grade}</p>
            </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">#{currentUserRank.rank}</p>
              <p className="text-blue-100">{currentUserRank.score} points</p>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Top Performers</h3>
          <div className="flex items-end justify-center space-x-4 mb-8">
            {/* Second Place */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                {leaderboardData[1].avatar}
              </div>
              <div className="bg-gray-300 text-gray-800 px-4 py-8 rounded-lg">
                <p className="font-semibold">{leaderboardData[1].name}</p>
                <p className="text-sm">Grade {leaderboardData[1].grade}</p>
                <p className="font-bold text-lg">{leaderboardData[1].score}</p>
            </div>
              <div className="mt-2 text-2xl">🥈</div>
            </div>

            {/* First Place */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                {leaderboardData[0].avatar}
            </div>
              <div className="bg-yellow-400 text-yellow-900 px-4 py-12 rounded-lg">
                <p className="font-bold">{leaderboardData[0].name}</p>
                <p className="text-sm">Grade {leaderboardData[0].grade}</p>
                <p className="font-bold text-xl">{leaderboardData[0].score}</p>
            </div>
              <div className="mt-2 text-3xl">🏆</div>
            </div>

            {/* Third Place */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                {leaderboardData[2].avatar}
              </div>
              <div className="bg-amber-400 text-amber-900 px-4 py-6 rounded-lg">
                <p className="font-semibold">{leaderboardData[2].name}</p>
                <p className="text-sm">Grade {leaderboardData[2].grade}</p>
                <p className="font-bold text-lg">{leaderboardData[2].score}</p>
            </div>
              <div className="mt-2 text-2xl">🥉</div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold text-gray-900">Complete Rankings</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {leaderboardData.map((student, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10">
                      {getRankIcon(student.rank)}
                    </div>
                    <div className={`w-12 h-12 ${getRankBadgeColor(student.rank)} rounded-full flex items-center justify-center text-white font-bold`}>
                      {student.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">Grade {student.grade}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{student.score}</p>
                      <p className="text-sm text-gray-600">points</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{student.badges}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
