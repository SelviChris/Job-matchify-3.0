import React from 'react';
import { Star, Clock, Award, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  platform: string;
  enrollmentLink: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  certificate: boolean;
  visualQuality: number;
  prerequisites: string[];
  rating: number;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Principles of Visual Design and Aesthetics',
    platform: 'Coursera',
    enrollmentLink: 'https://www.coursera.org/learn/visual-design-aesthetics',
    description: 'Master the fundamentals of visual aesthetics and design principles. Learn color theory, composition, and typography while developing a keen eye for beautiful design.',
    duration: '6 weeks',
    difficulty: 'Beginner',
    certificate: true,
    visualQuality: 5,
    prerequisites: ['None'],
    rating: 4.8
  },
  {
    id: '2',
    title: 'Aesthetic Photography Fundamentals',
    platform: 'edX',
    enrollmentLink: 'https://www.edx.org/learn/photography',
    description: 'Explore the art of aesthetic photography through composition, lighting, and post-processing. Create visually stunning images that tell compelling stories.',
    duration: '4 weeks',
    difficulty: 'Beginner',
    certificate: true,
    visualQuality: 4,
    prerequisites: ['Basic camera knowledge'],
    rating: 4.6
  },
  {
    id: '3',
    title: 'Web Design Aesthetics and UX',
    platform: 'FutureLearn',
    enrollmentLink: 'https://www.futurelearn.com/courses/web-design-aesthetics',
    description: 'Learn to create visually appealing and user-friendly websites. Focus on modern design trends, responsive layouts, and aesthetic principles in digital interfaces.',
    duration: '8 weeks',
    difficulty: 'Intermediate',
    certificate: true,
    visualQuality: 5,
    prerequisites: ['Basic HTML/CSS'],
    rating: 4.7
  },
  {
    id: '4',
    title: 'Digital Art and Aesthetic Expression',
    platform: 'Khan Academy',
    enrollmentLink: 'https://www.khanacademy.org/humanities/art-history',
    description: 'Discover digital art techniques and aesthetic expression methods. Create compelling digital artwork using industry-standard tools and techniques.',
    duration: '5 weeks',
    difficulty: 'Beginner',
    certificate: false,
    visualQuality: 4,
    prerequisites: ['None'],
    rating: 4.5
  }
];

const CourseList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-5">
          <h2 className="text-2xl font-bold text-gray-900">Recommended Courses</h2>
          <p className="mt-2 text-sm text-gray-500">Curated courses to enhance your aesthetic skills</p>
        </div>
        
        <div className="grid gap-6">
          {courses
            .sort((a, b) => b.rating - a.rating)
            .map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mt-1">{course.platform}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{course.rating}</span>
                  </div>
                </div>

                <p className="mt-3 text-gray-600">{course.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{course.difficulty}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">Visual Quality:</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < course.visualQuality
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {course.prerequisites.length > 0 && (
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Prerequisites:</span>{' '}
                      {course.prerequisites.join(', ')}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  {course.certificate && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-medium">Certificate Available</span>
                    </div>
                  )}
                  <a
                    href={course.enrollmentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;