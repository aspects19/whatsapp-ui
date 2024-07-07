"use-client"
import React from 'react';

function Home() {
  const handleFileUpload = (event) => {
    // Handle file upload logic here
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  };

  return (
    <main className="flex justify-center">
      <div className="max-w-lg w-full bg-white shadow-md h-screen rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to Chat Export Viewer</h1>
        <p className="text-center text-gray-600 mb-8">
          Upload your chat_export.txt file to view and explore your chat history.
        </p>
        <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 mb-4 text-center">
          <input
            type="file"
            accept=".txt"
            //onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Drag and drop your chat_export.txt file here or click to upload
          </label>
        </div>
        <button
          //onClick={() => console.log('Proceed to chat view')}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          View Chat
        </button>
      </div>
    </main>
  );
}

export default Home;
