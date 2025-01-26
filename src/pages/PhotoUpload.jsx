import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { format } from 'date-fns';
import { Upload, X } from 'lucide-react';

export function PhotoUpload() {
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  
  const dates = [
    new Date('2024-03-02'),
    new Date('2024-02-24'),
    new Date('2024-02-17')
  ];

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    }
  });

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (!selectedAlbum) {
      alert('Please select an album');
      return;
    }
    // Handle upload logic here
    console.log('Uploading to album:', selectedAlbum);
    console.log('Files:', uploadedFiles);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-8">Upload Photos</h2>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Select Album:
        </label>
        <select
          value={selectedAlbum}
          onChange={(e) => setSelectedAlbum(e.target.value)}
          className="w-full glass-card px-4 py-2 rounded-lg bg-transparent mb-6"
          required
        >
          <option value="">Choose an album</option>
          {dates.map((date) => (
            <option key={date.toISOString()} value={date.toISOString()}>
              {format(date, 'MMMM d, yyyy')}
            </option>
          ))}
        </select>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-white/40 bg-white/5' : 'hover:border-white/30'}`}
        >
          <input {...getInputProps()} />
          <Upload size={48} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-300 mb-2">
            {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
          </p>
          <p className="text-sm text-gray-400">
            or click to select files
          </p>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white">Selected Files:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={file.preview}
                  alt={`Preview ${index}`}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleUpload}
            className="w-full h-12 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-all duration-200 font-medium border border-white/10 mt-6"
          >
            Upload Photos
          </button>
        </div>
      )}
    </div>
  );
}
