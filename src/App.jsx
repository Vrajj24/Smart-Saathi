import React, { useState } from 'react';
import { BookOpen, Users, GraduationCap, ArrowLeft } from 'lucide-react';
import AuthModal from './components/AuthModal';
import Quizzes from './components/Quizzes';
import Leaderboard from './components/Leaderboard';
import Scholarships from './components/Scholarships';
import Dashboard from './components/Dashboard';
import Lessons from './components/Lessons';
import Layout from './components/Layout';
import Help from './components/Help';

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showHelpPreLogin, setShowHelpPreLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Type annotation <any> is removed for plain JSX
  const [userData, setUserData] = useState(null); 
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (data) => {
    setUserData(data);
    setIsLoggedIn(true);
    setShowAuthModal(false);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (pageId) => {
    console.log('Navigating to:', pageId);
    setCurrentPage(pageId);
  };

  const renderLoggedInPage = () => {
    const pageProps = { userData, onLogout: handleLogout, onNavigate: handleNavigate, currentPage };
    console.log('Rendering page:', currentPage);

    switch (currentPage) {
      case 'lessons':
        return <Lessons {...pageProps} />;
      case 'quizzes':
        return <Quizzes {...pageProps} />;
      case 'leaderboard':
        return <Leaderboard {...pageProps} />;
      case 'scholarships':
        return <Scholarships {...pageProps} />;
      case 'help':
        return (
          <Layout currentPage={currentPage} onNavigate={handleNavigate} onLogout={handleLogout}>
            <Help />
          </Layout>
        );
      case 'dashboard':
      default:
        return <Dashboard {...pageProps} />;
    }
  };

  // Show pre-login Help page (without layout)
  if (showHelpPreLogin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18 py-4">
              <img
                src="/smartsaathi.png"
                alt="Smart Saathi"
                className="h-16 w-auto"
              />
              <button
                onClick={() => setShowHelpPreLogin(false)}
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </button>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Help />
          </div>
        </main>
      </div>
    );
  }

  // Show logged-in pages
  if (isLoggedIn && userData) {
    return renderLoggedInPage();
  }

  // Show landing page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-0">
      <div className="relative w-full flex flex-col items-center justify-center px-0 py-0">

        {/* Hero Section */}
        <div className="w-full h-[520px] md:h-[600px] relative flex items-center justify-center mb-16">
          <img
            src="/sess.jpg"
            alt="Smart-Saathi Hero"
            className="w-full h-full object-cover rounded-t-2xl"
            style={{ maxHeight: '600px', objectPosition: 'top' }}
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-8">
            <h1
              className="text-6xl md:text-7xl font-extrabold mb-4 tracking-wide"
              style={{
                color: '#0d40d9',
                textShadow: '0 10px 10px rgba(0,0,0,0.10)',
                letterSpacing: '0.04em',
                lineHeight: 1.1
              }}
            >
              Smart-Saathi
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white mb-6 max-w-xl drop-shadow-lg bg-black bg-opacity-40 rounded-xl px-4 py-2">
              Free Quality Education for All<br />
              <span className="text-base font-normal">गुणवत्तापूर्ण शिक्षा सबके लिए</span>
            </p>
            <p className="text-base md:text-lg text-white mb-8 max-w-xl leading-relaxed drop-shadow-lg bg-black bg-opacity-30 rounded-xl px-4 py-2">
              Gamified learning, offline content, and personalized education for Grades 1-10.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full px-8 max-w-7xl">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Video Lessons</h3>
            <p className="text-gray-600">High-quality educational videos with subtitles, optimized for low-bandwidth connections</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100 text-center">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gamified Learning</h3>
            <p className="text-gray-600">Earn badges, compete on leaderboards, and track your progress as you learn</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-100 text-center">
            <GraduationCap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Scholarship Info</h3>
            <p className="text-gray-600">Access government scholarship opportunities and application guidance</p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
          <a
            href="https://youtu.be/0tXCKE3RCcM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
          >
            Watch Demo
          </a>
          <button
            onClick={() => setShowHelpPreLogin(true)}
            className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg"
          >
            Get Help
          </button>
          <button
            onClick={() => setShowAuthModal(true)}
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg"
          >
            Get Started
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full px-8 max-w-7xl">
          <div>
            <div className="text-3xl font-bold text-blue-600">10L+</div>
            <div className="text-gray-600">Students Learning</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">50+</div>
            <div className="text-gray-600">Video Lessons</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">15+</div>
            <div className="text-gray-600">Scholarships Listed</div>
          </div>
        </div>

        {/* Mission & Involvement Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 w-full max-w-7xl mx-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Smart-Saathi is committed to bridging the digital divide and ensuring that quality education reaches every corner of India. Every child, regardless of their economic background, deserves access to excellent educational resources.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We empower underprivileged students with gamified learning, offline content, and personalized education. Join millions of students building a brighter future through accessible digital education.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Why Choose Smart-Saathi?</h3>
            <ul className="list-disc list-inside text-gray-700 text-base mb-4">
              <li>Completely free for all students</li>
              <li>Optimized for low-bandwidth and offline access</li>
              <li>Government scholarship information and guidance</li>
              <li>Progress tracking and gamification for motivation</li>
            </ul>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Get Involved</h3>
            <ul className="list-disc list-inside text-gray-700 text-base">
              <li>Volunteer as a mentor or content creator</li>
              <li>Partner with us to reach more communities</li>
              <li>Support our mission by sharing Smart-Saathi</li>
            </ul>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-8 mb-8 bg-blue-50 rounded-2xl p-8 shadow border border-blue-100 w-full max-w-7xl mx-8 text-center">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Contact & Support</h2>
          <p className="text-gray-700 mb-2">
            Have questions or want to help? Reach out at{' '}
            <a href="mailto:contact@smart-saathi.org" className="text-blue-600 underline">
              contact@smart-saathi.org
            </a>
          </p>
          <p className="text-gray-700">Follow us on social media for updates and success stories.</p>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;