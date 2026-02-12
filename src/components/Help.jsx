import React, { useState } from 'react';
import { HelpCircle, Book, Download, Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Help = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { id: 'getting-started', label: 'Getting Started', icon: Book },
    { id: 'technical', label: 'Technical Issues', icon: HelpCircle },
    { id: 'account', label: 'Account & Profile', icon: MessageCircle },
    { id: 'content', label: 'Learning Content', icon: Download },
  ];

  const faqs = {
    'getting-started': [
      {
        question: 'How do I create an account on Smart-Saathi?',
        answer: 'Click on the "Sign Up" button on the homepage, enter your name, age, grade, and create a password. Your account will be created instantly and you can start learning immediately.'
      },
      {
        question: 'Is Smart-Saathi really free to use?',
        answer: 'Yes, Smart-Saathi is completely free. All video lessons, quizzes, and features are available at no cost. Our mission is to provide quality education to all students regardless of their economic background.'
      },
      {
        question: 'What grades does Smart-Saathi cover?',
        answer: 'Smart-Saathi provides educational content for students from Grade 1 to Grade 10, covering all major subjects aligned with state board curricula.'
      },
      {
        question: 'Can I use Smart-Saathi on my mobile phone?',
        answer: 'Yes! Smart-Saathi is designed to work perfectly on smartphones, tablets, and computers. The interface adapts to your device screen size for the best learning experience.'
      }
    ],
    'technical': [
      {
        question: 'Videos are not playing properly. What should I do?',
        answer: 'First, check your internet connection. If the problem persists, try refreshing the page or clearing your browser cache. You can also download videos for offline viewing when you have a stable connection.'
      },
      {
        question: 'How can I download videos for offline viewing?',
        answer: 'Click the download icon next to any video lesson. The video will be saved to your device and you can watch it even without internet. Downloaded videos are available in the "My Downloads" section.'
      },
      {
        question: 'The website is loading slowly. How can I fix this?',
        answer: 'Smart-Saathi is optimized for low-bandwidth connections. If it\'s still slow, try closing other apps, connecting to Wi-Fi if available, or using the website during off-peak hours.'
      },
      {
        question: 'I can\'t see subtitles in videos. How do I enable them?',
        answer: 'Click the "CC" button in the video player to turn on subtitles. If you don\'t see this option, the video may not have subtitles available yet - we\'re working to add them to all content.'
      }
    ],
    'account': [
      {
        question: 'How do I change my grade level?',
        answer: 'Go to your profile settings and update your grade. This will automatically adjust the content recommendations to match your new grade level.'
      },
      {
        question: 'Can I track my learning progress?',
        answer: 'Yes! Your dashboard shows your completed lessons, quiz scores, badges earned, and overall progress. You can also see how you rank on the leaderboard.'
      },
      {
        question: 'How do I earn badges and rewards?',
        answer: 'Complete lessons, score well on quizzes, and maintain learning streaks to earn badges. Check the achievements section to see all available badges and how to earn them.'
      }
    ],
    'content': [
      {
        question: 'Are the lessons aligned with my school curriculum?',
        answer: 'Yes, all content is designed to align with state board curricula. The lessons complement what you learn in school and help reinforce important concepts.'
      },
      {
        question: 'How often is new content added?',
        answer: 'We regularly add new lessons, quizzes, and features. Check the "What\'s New" section on your dashboard to see the latest additions.'
      },
      {
        question: 'Can I suggest topics for new lessons?',
        answer: 'Absolutely! We value student feedback. Use the feedback form below or contact us directly to suggest topics you\'d like to learn about.'
      },
      {
        question: 'Are there practice exercises beyond quizzes?',
        answer: 'Currently, we offer interactive quizzes after each lesson. We\'re working on adding more practice exercises and hands-on activities in future updates.'
      }
    ]
  };

  const USER_MANUAL_URL = '/manual_guide.pdf';

  const handleDownloadManual = () => {
    const link = document.createElement('a');
    link.href = USER_MANUAL_URL;
    link.setAttribute('download', 'manual_guide.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Help & Support</h2>
        <button
          onClick={handleDownloadManual}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="h-5 w-5" />
          <span>Download Manual</span>
        </button>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6" />
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-blue-100">1800-780-8888</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6" />
            <div>
              <p className="font-semibold">Email Us</p>
              <p className="text-blue-100">help@smart-saathi.org</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MessageCircle className="h-6 w-6" />
            <div>
              <p className="font-semibold">Chat Support</p>
              <p className="text-blue-100">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Help Categories</h3>
            <nav className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{category.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">
                {categories.find(c => c.id === activeCategory)?.label} FAQs
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {faqs[activeCategory].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Video Tutorials</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• How to navigate Smart-Saathi</li>
              <li>• Downloading content for offline use</li>
              <li>• Taking quizzes and tracking progress</li>
              <li>• Using the leaderboard feature</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tips for Better Learning</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Set a daily learning schedule</li>
              <li>• Download lessons when you have Wi-Fi</li>
              <li>• Take notes while watching videos</li>
              <li>• Practice regularly with quizzes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Question</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your question or issue in detail..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Method (Optional)</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Phone number or email (if you want us to contact you back)"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
