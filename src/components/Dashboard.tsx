import React from 'react';
import { BarChart, BookOpen, BriefcaseIcon, GraduationCap, LineChart } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Skills Match</h3>
            <BarChart className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600">85%</p>
          <p className="text-sm text-gray-500 mt-2">Overall compatibility</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Job Matches</h3>
            <BriefcaseIcon className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600">24</p>
          <p className="text-sm text-gray-500 mt-2">Suitable positions found</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Learning Path</h3>
            <GraduationCap className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-purple-600">3</p>
          <p className="text-sm text-gray-500 mt-2">Recommended courses</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Applications</h3>
            <LineChart className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-3xl font-bold text-orange-600">8</p>
          <p className="text-sm text-gray-500 mt-2">Active applications</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Top Skills</h3>
            <BookOpen className="w-6 h-6 text-blue-500" />
          </div>
          <div className="space-y-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
              <div key={skill} className="flex items-center">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recommended Jobs</h3>
            <BriefcaseIcon className="w-6 h-6 text-green-500" />
          </div>
          <div className="space-y-4">
            {[
              { title: 'Senior Frontend Developer', company: 'Tech Corp', match: '95%' },
              { title: 'Full Stack Engineer', company: 'StartUp Inc', match: '90%' },
              { title: 'React Developer', company: 'Innovation Labs', match: '88%' },
            ].map((job) => (
              <div key={job.title} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{job.title}</h4>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
                <span className="text-sm font-medium text-green-600">{job.match} Match</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};