import React, { useState } from 'react';
import { Award, Calendar, Users, MapPin, ExternalLink, Download, Filter } from 'lucide-react';
import Layout from './Layout';

const Scholarships = ({ userData, onLogout, onNavigate, currentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');

  const categories = [
    { value: 'all', label: 'All Scholarships' },
    { value: 'merit', label: 'Merit-based' },
    { value: 'need', label: 'Need-based' },
    { value: 'minority', label: 'Minority' },
    { value: 'girl', label: 'Girl Child' },
    { value: 'sports', label: 'Sports & Arts' },
  ];

  const grades = [
    { value: 'all', label: 'All Grades' },
    { value: '1-5', label: 'Grades 1-5' },
    { value: '6-8', label: 'Grades 6-8' },
    { value: '9-10', label: 'Grades 9-10' },
    { value: '11-12', label: 'Grades 11-12' },
  ];

  const scholarships = [
    {
      id: 1,
      title: 'National Scholarship Portal - Pre Matric',
      provider: 'Government of India',
      category: 'need',
      amount: '₹1,200 per year',
      eligibility: 'Students from Classes 1-10 from economically weaker sections',
      deadline: '30th November 2024',
      applicants: '2.5L+',
      location: 'Pan India',
      description: 'Scholarship for students belonging to minority communities studying in classes I-X.',
      requirements: [
        'Family income less than ₹1 lakh per annum',
        'Student should have passed the previous class',
        'Bank account details required'
      ],
      documents: ['Income Certificate', 'Caste Certificate', 'Previous Year Marksheet', 'Bank Passbook'],
      applicationLink: 'https://scholarships.gov.in',
      active: true
    },
    {
      id: 2,
      title: 'INSPIRE Awards - MANAK',
      provider: 'Department of Science and Technology',
      category: 'merit',
      amount: '₹10,000',
      eligibility: 'Students of Classes 6-10 for innovation projects',
      deadline: '31st December 2024',
      applicants: '10L+',
      location: 'Pan India',
      description: 'Award scheme to motivate students to take up research and innovation projects.',
      requirements: [
        'Original innovative idea or project',
        'Student must be in classes 6-10',
        'Project should be science-based'
      ],
      documents: ['Project Report', 'School Certificate', 'Aadhar Card'],
      applicationLink: 'https://www.inspireawards-dst.gov.in',
      active: true
    },
    {
      id: 3,
      title: 'Kanyashree Prakalpa',
      provider: 'Government of West Bengal',
      category: 'girl',
      amount: '₹500-750 per year',
      eligibility: 'Girl students aged 13-18 years',
      deadline: '15th January 2025',
      applicants: '45L+',
      location: 'West Bengal',
      description: 'Conditional cash transfer scheme for the girl child to improve their status and well-being.',
      requirements: [
        'Girl child aged between 13-18 years',
        'Must be unmarried',
        'Regular school attendance required'
      ],
      documents: ['Birth Certificate', 'School Certificate', 'Bank Account Details'],
      applicationLink: 'https://www.kanyashree.gov.in',
      active: true
    },
    {
      id: 4,
      title: 'Central Sector Scheme of Scholarships',
      provider: 'Ministry of Education',
      category: 'merit',
      amount: '₹10,000-20,000 per year',
      eligibility: 'Students who have secured admission in graduation courses',
      deadline: '28th February 2025',
      applicants: '1.2L+',
      location: 'Pan India',
      description: 'Scholarship for meritorious students from families with gross parental income below specified limits.',
      requirements: [
        'Minimum 80% marks in Class 12',
        'Family income below ₹4.5 lakh per annum',
        'Admission in recognized institution'
      ],
      documents: ['Class 12 Marksheet', 'Income Certificate', 'Admission Proof'],
      applicationLink: 'https://scholarships.gov.in',
      active: true
    },
    {
      id: 5,
      title: 'National Means-cum-Merit Scholarship',
      provider: 'Ministry of Education',
      category: 'need',
      amount: '₹12,000 per year',
      eligibility: 'Students studying in Class 9 from economically weaker sections',
      deadline: '31st October 2024',
      applicants: '8L+',
      location: 'Pan India',
      description: 'Scholarship to arrest school dropout and encourage meritorious students from economically weaker sections.',
      requirements: [
        'Minimum 55% marks in Class 8',
        'Parental income not exceeding ₹3.5 lakh per annum',
        'Regular school attendance'
      ],
      documents: ['Class 8 Marksheet', 'Income Certificate', 'School Bonafide Certificate'],
      applicationLink: 'https://scholarships.gov.in',
      active: true
    },
    {
      id: 6,
      title: 'Begum Hazrat Mahal National Scholarship',
      provider: 'Maulana Azad Education Foundation',
      category: 'minority',
      amount: '₹5,000-6,000 per year',
      eligibility: 'Girl students from minority communities in Class 9-12',
      deadline: '15th November 2024',
      applicants: '3.5L+',
      location: 'Pan India',
      description: 'Scholarship for meritorious girl students from notified minority communities.',
      requirements: [
        'Minimum 50% marks in previous class',
        'From minority community',
        'Family income below ₹2 lakh per annum'
      ],
      documents: ['Previous Marksheet', 'Minority Community Certificate', 'Income Certificate'],
      applicationLink: 'https://maef.nic.in',
      active: true
    },
    {
      id: 7,
      title: 'Post-Matric Scholarship for SC Students',
      provider: 'Ministry of Social Justice',
      category: 'need',
      amount: '₹2,000-10,000 per year',
      eligibility: 'SC students studying in Classes 11-12 and above',
      deadline: '30th November 2024',
      applicants: '6L+',
      location: 'Pan India',
      description: 'Financial assistance to SC students for pursuing post-matriculation studies.',
      requirements: [
        'Belong to Scheduled Caste',
        'Passed matriculation/Class 10',
        'Parental income below ₹2.5 lakh per annum'
      ],
      documents: ['SC Certificate', 'Income Certificate', 'Admission Proof', 'Marksheet'],
      applicationLink: 'https://scholarships.gov.in',
      active: true
    },
    {
      id: 8,
      title: 'National Fellowship and Scholarship for Higher Education of ST Students',
      provider: 'Ministry of Tribal Affairs',
      category: 'minority',
      amount: '₹3,000-5,000 per year',
      eligibility: 'ST students pursuing higher education',
      deadline: '31st December 2024',
      applicants: '4L+',
      location: 'Pan India',
      description: 'Fellowship to provide opportunities for higher education to ST students.',
      requirements: [
        'Belong to Scheduled Tribe',
        'Enrolled in recognized institution',
        'Satisfactory academic progress'
      ],
      documents: ['ST Certificate', 'Previous Marksheet', 'Admission Proof'],
      applicationLink: 'https://tribal.nic.in',
      active: true
    },
    {
      id: 9,
      title: 'Swami Vivekananda Merit-cum-Means Scholarship',
      provider: 'Government of West Bengal',
      category: 'merit',
      amount: '₹1,000-1,500 per month',
      eligibility: 'Students pursuing graduation and post-graduation',
      deadline: '20th January 2025',
      applicants: '2L+',
      location: 'West Bengal',
      description: 'Scholarship for meritorious students with financial constraints.',
      requirements: [
        'Minimum 75% marks in previous examination',
        'Family income below ₹2.5 lakh per annum',
        'Domicile of West Bengal'
      ],
      documents: ['Marksheet', 'Income Certificate', 'Domicile Certificate'],
      applicationLink: 'https://svmcm.wbhed.gov.in',
      active: true
    },
    {
      id: 10,
      title: 'EBC Post-Matric Scholarship',
      provider: 'Various State Governments',
      category: 'need',
      amount: '₹1,000-3,000 per year',
      eligibility: 'Students from Economically Backward Classes in Classes 11-12',
      deadline: '31st January 2025',
      applicants: '5L+',
      location: 'State-wise',
      description: 'Financial assistance for students from economically backward classes.',
      requirements: [
        'Belong to EBC category',
        'Family income below state-specified limit',
        'Minimum 50% attendance'
      ],
      documents: ['EBC Certificate', 'Income Certificate', 'Marksheet', 'School Certificate'],
      applicationLink: 'https://scholarships.gov.in',
      active: true
    },
    {
      id: 11,
      title: 'National Scheme of Incentive to Girls for Secondary Education',
      provider: 'Ministry of Education',
      category: 'girl',
      amount: '₹3,000 one-time',
      eligibility: 'Girls who pass Class 8 and enroll in Class 9',
      deadline: '30th September 2024',
      applicants: '7L+',
      location: 'Pan India',
      description: 'Incentive to promote enrollment and retention of girl children in secondary education.',
      requirements: [
        'Passed Class 8 examination',
        'Enrolled in Class 9 in government or aided school',
        'Unmarried girl child'
      ],
      documents: ['Class 8 Pass Certificate', 'School Enrollment Certificate', 'Bank Details'],
      applicationLink: 'https://nsigse.gov.in',
      active: false
    },
    {
      id: 12,
      title: 'Vidyasaarathi Scholarship Program',
      provider: 'NSDL e-Governance',
      category: 'need',
      amount: 'Varies (₹10,000-50,000)',
      eligibility: 'Students from Classes 6-12 and higher education',
      deadline: 'Rolling deadlines',
      applicants: '3L+',
      location: 'Pan India',
      description: 'Platform connecting students with corporate and individual donors for scholarships.',
      requirements: [
        'Merit-based or need-based criteria',
        'Varies by scholarship program',
        'Academic performance criteria'
      ],
      documents: ['Marksheet', 'Income Certificate', 'ID Proof'],
      applicationLink: 'https://www.vidyasaarathi.co.in',
      active: true
    },
    {
      id: 13,
      title: 'Prime Minister\'s Scholarship Scheme for Central Armed Police Forces',
      provider: 'Ministry of Home Affairs',
      category: 'merit',
      amount: '₹2,000-3,000 per month',
      eligibility: 'Wards and widows of CAPF personnel',
      deadline: '31st October 2024',
      applicants: '15,000+',
      location: 'Pan India',
      description: 'Scholarship for children and widows of CAPF personnel who died or were disabled in service.',
      requirements: [
        'Ward/widow of CAPF personnel',
        'Minimum 60% marks in Class 12',
        'Pursuing graduation or post-graduation'
      ],
      documents: ['Service Certificate', 'Marksheet', 'Admission Proof', 'Death/Disability Certificate'],
      applicationLink: 'https://scholarships.gov.in',
      active: true
    },
    {
      id: 14,
      title: 'Ishan Uday Special Scholarship',
      provider: 'Ministry of Education',
      category: 'need',
      amount: '₹4,000-5,000 per year',
      eligibility: 'Students from North Eastern region pursuing higher education',
      deadline: '30th November 2024',
      applicants: '10,000+',
      location: 'North East States',
      description: 'Special scholarship for students from North Eastern states to pursue higher education.',
      requirements: [
        'Domicile of North Eastern state',
        'Admission in recognized institution',
        'Family income below ₹4.5 lakh per annum'
      ],
      documents: ['Domicile Certificate', 'Income Certificate', 'Admission Proof', 'Marksheet'],
      applicationLink: 'https://scholarships.gov.in',
      active: true
    },
    {
      id: 15,
      title: 'National Sports Talent Search Scholarship',
      provider: 'Sports Authority of India',
      category: 'sports',
      amount: '₹1,500 per month',
      eligibility: 'Young sports talents aged 8-14 years',
      deadline: '15th December 2024',
      applicants: '50,000+',
      location: 'Pan India',
      description: 'Scholarship to nurture young sports talents and provide them financial support.',
      requirements: [
        'Age between 8-14 years',
        'Demonstrated sports talent',
        'Regular participation in sports activities'
      ],
      documents: ['Birth Certificate', 'Sports Achievement Certificates', 'School Certificate'],
      applicationLink: 'https://sportsauthorityofindia.nic.in',
      active: true
    },
    {
      id: 16,
      title: 'Cultural Talent Search Scholarship',
      provider: 'Centre for Cultural Resources and Training',
      category: 'sports',
      amount: '₹200-500 per month',
      eligibility: 'Students aged 10-14 with cultural talent',
      deadline: '31st January 2025',
      applicants: '25,000+',
      location: 'Pan India',
      description: 'Scholarship to identify and nurture talent in various cultural fields.',
      requirements: [
        'Age between 10-14 years',
        'Talent in music, dance, drama, or visual arts',
        'Financial need'
      ],
      documents: ['Birth Certificate', 'Talent Certificate', 'Income Certificate'],
      applicationLink: 'https://ccrtindia.gov.in',
      active: true
    },
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const categoryMatch = selectedCategory === 'all' || scholarship.category === selectedCategory;
    const gradeMatch = selectedGrade === 'all';
    return categoryMatch && gradeMatch;
  });

  const SCHOLARSHIP_GUIDE_URL = '/Scholarship Guide.pdf';

  const handleDownloadGuide = () => {
    const link = document.createElement('a');
    link.href = SCHOLARSHIP_GUIDE_URL;
    link.setAttribute('download', 'Scholarship Guide.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <Layout
      currentPage="scholarships"
      onNavigate={onNavigate}
      onLogout={onLogout}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Government Scholarships</h2>
          <button
            onClick={handleDownloadGuide}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Download className="h-5 w-5" />
            <span>Download Guide</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{scholarships.length}</p>
                <p className="text-sm text-gray-600">Active Scholarships</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-emerald-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">50L+</p>
                <p className="text-sm text-gray-600">Students Benefited</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-amber-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">Dec 31</p>
                <p className="text-sm text-gray-600">Next Deadline</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Scholarships</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{scholarship.title}</h3>
                      {scholarship.active && (
                        <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{scholarship.provider}</p>
                    <p className="text-blue-600 font-semibold text-lg">{scholarship.amount}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${scholarship.active ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
                </div>

                <p className="text-gray-700 mb-4">{scholarship.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{scholarship.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Deadline: {scholarship.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{scholarship.applicants} applicants</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                  <p className="text-sm text-gray-700">{scholarship.eligibility}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {scholarship.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Required Documents:</h4>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.documents.map((doc, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (scholarship.active) {
                      window.open(scholarship.applicationLink, '_blank');
                    }
                  }}
                  className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-colors ${
                    scholarship.active
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={!scholarship.active}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{scholarship.active ? 'Apply Now' : 'Applications Closed'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No scholarships found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more scholarship opportunities.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Scholarships;
