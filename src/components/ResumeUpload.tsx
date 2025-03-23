import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Camera, Image } from 'lucide-react';

interface ResumeUploadProps {
  onFileUpload: (file: File) => void;
}

export const ResumeUpload: React.FC<ResumeUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Upload className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-sm text-gray-600">Upload File</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Camera className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-sm text-gray-600">Scan Resume</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Image className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-sm text-gray-600">Import Image</span>
            </div>
          </div>
          <p className="text-gray-600">
            {isDragActive
              ? "Drop your resume here"
              : "Drag & drop your resume, or click to select files"}
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: PDF, DOC, DOCX, PNG, JPG
          </p>
        </div>
      </div>
    </div>
  );
};