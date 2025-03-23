import React, { useState } from 'react';
import { ResumeUpload } from './components/ResumeUpload';
import { Dashboard } from './components/Dashboard';
import CourseList from './components/CourseList';
import ResumeHistory from './components/ResumeHistory';
import { FileText, User, Settings, GraduationCap, History } from 'lucide-react';

function App() {
  const [hasUploadedResume, setHasUploadedResume] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleFileUpload = (file: File) => {
    // TODO: Implement file processing logic
    console.log('Uploaded file:', file);
    setHasUploadedResume(true);
  };

  const renderContent = () => {
    if (!hasUploadedResume) {
      return (
        <div className="px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Upload Your Resume
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get instant analysis of your skills, personalized job recommendations,
              and a customized learning path to advance your career.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <ResumeUpload onFileUpload={handleFileUpload} />
            <ResumeHistory />
          </div>
        </div>
      );
    }

    if (showCourses) {
      return <CourseList />;
    }

    if (showHistory) {
      return (
        <div className="px-4 py-8">
          <ResumeHistory />
        </div>
      );
    }

    return <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">ResumeAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => {
                  setShowCourses(false);
                  setShowHistory(true);
                }}
                className="p-2 text-gray-500 hover:text-gray-700 relative group"
              >
                <History className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  History
                </span>
              </button>
              <button 
                onClick={() => {
                  setShowCourses(true);
                  setShowHistory(false);
                }}
                className="p-2 text-gray-500 hover:text-gray-700 relative group"
              >
                <GraduationCap className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Courses
                </span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <User className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;