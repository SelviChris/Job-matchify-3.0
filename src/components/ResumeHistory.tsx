import React from 'react';
import { Calendar, FileText, Download, Trash2 } from 'lucide-react';

interface ResumeRecord {
  id: string;
  fileName: string;
  uploadDate: Date;
  fileSize: string;
  scanType: 'upload' | 'camera' | 'image';
  thumbnailUrl?: string;
}

// Mock data - in a real app, this would come from a database
const resumeHistory: ResumeRecord[] = [
  {
    id: '1',
    fileName: 'Professional_Resume_2024.pdf',
    uploadDate: new Date('2024-03-10'),
    fileSize: '2.4 MB',
    scanType: 'upload',
  },
  {
    id: '2',
    fileName: 'Resume_Scan.jpg',
    uploadDate: new Date('2024-03-08'),
    fileSize: '1.8 MB',
    scanType: 'camera',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    fileName: 'Resume_Draft.docx',
    uploadDate: new Date('2024-03-05'),
    fileSize: '1.2 MB',
    scanType: 'upload',
  },
];

const ResumeHistory: React.FC = () => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getScanTypeIcon = (type: string) => {
    switch (type) {
      case 'camera':
        return '📸';
      case 'image':
        return '🖼️';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900">Resume History</h2>
        <p className="text-sm text-gray-500 mt-1">Previously scanned and uploaded resumes</p>
      </div>

      <div className="divide-y divide-gray-100">
        {resumeHistory.map((record) => (
          <div key={record.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl" role="img" aria-label="scan type">
                    {getScanTypeIcon(record.scanType)}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{record.fileName}</h3>
                  <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {formatDate(record.uploadDate)}
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-3.5 h-3.5 mr-1" />
                      {record.fileSize}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  className="p-1.5 text-gray-500 hover:text-blue-600 transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  className="p-1.5 text-gray-500 hover:text-red-600 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {record.thumbnailUrl && (
              <div className="mt-3">
                <img
                  src={record.thumbnailUrl}
                  alt="Resume preview"
                  className="h-20 w-auto rounded-md object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 p-4 bg-gray-50">
        <p className="text-xs text-gray-500">
          Showing {resumeHistory.length} recent items
        </p>
      </div>
    </div>
  );
};

export default ResumeHistory;