import '../Styles/button48.css';

import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // You can perform upload logic here using selectedFile
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your upload logic here (e.g., using FormData and a fetch request)
    } else {
      console.error('No file selected');
    }
  };

  const handleDownload = () => {
    // You can perform download logic here using selectedFile
    if (selectedFile) {
      console.log('Downloading file:', selectedFile);
      // Add your download logic here (e.g., creating a download link)
      const downloadLink = URL.createObjectURL(selectedFile);
      const a = document.createElement('a');
      a.href = downloadLink;
      a.download = selectedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error('No file to download');
    }
  };

  return (
    <div className="mt-48">
      <div className="flex justify-center mb-10">
        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs "
          onChange={handleFileChange}
        />
      </div>
      {selectedFile && (
        <div className="flex justify-center mb-10 text-white">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
      <div className="flex justify-center gap-10">
        <button className="button-57 text-white" onClick={handleUpload}>
          Upload
        </button>
        <button className="button-57 text-white" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
