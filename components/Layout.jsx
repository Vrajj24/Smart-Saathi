import React, { useState } from 'react';
import { Home, BookOpen, Trophy, HelpCircle, GraduationCap, Download, LogOut, X } from 'lucide-react';

// The original component definition, now using useState and without TypeScript types
const Layout = ({ children, currentPage, onNavigate, onLogout }) => {
  // State to manage the visibility of the logout confirmation modal
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Define navigation items (excluding Logout, which is added below)
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, action: () => onNavigate('dashboard') },
    { id: 'lessons', label: 'Lessons', icon: BookOpen, action: () => onNavigate('lessons') },
    { id: 'quizzes', label: 'Quizzes', icon: GraduationCap, action: () => onNavigate('quizzes') },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, action: () => onNavigate('leaderboard') },
    { id: 'scholarships', label: 'Scholarships', icon: Download, action: () => onNavigate('scholarships') },
    { id: 'help', label: 'Help', icon: HelpCircle, action: () => onNavigate('help') },
  ];

  // The Logout action opens the modal
  const handleLogoutClick = () => setShowLogoutModal(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            <img
              // Placeholder image path, update this
              src="/smartsaathi.png"
              alt="Smart Saathi"
              className="h-16 w-auto"
            />
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                गुणवत्तापूर्ण शिक्षा सबके लिए
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white shadow-lg min-h-screen border-r border-gray-200 flex flex-col">
          <div className="p-6 flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isSelected = currentPage === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={item.action}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
              
              {/* LOGOUT BUTTON: Moved directly below help in the main ul */}
              <li key="logout">
                <button
                  onClick={handleLogoutClick} // Opens the confirmation modal
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </li>
              
            </ul>
          </div>
          
          {/* Original empty footer removed */}
          
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-8 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full mx-4 p-6 transform transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <LogOut className="h-6 w-6 text-red-600" />
                <span>Confirm Logout</span>
              </h3>
              <button onClick={() => setShowLogoutModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-gray-700 mb-6">Are you sure you want to log out of your Smart-Saathi session?</p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  onLogout(); // Execute the actual logout function passed from App.jsx
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;