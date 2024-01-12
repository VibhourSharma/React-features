import { useState } from "react";
import "./FileUploadComponent.css";

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("File selected:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="file-upload">
      <h3>/ File Upload Component</h3>
      <div className="file-upload-container">
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button onClick={handleUpload} className="upload-button">
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUploadComponent;
