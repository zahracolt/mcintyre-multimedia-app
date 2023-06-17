import React, { useState } from 'react';

export function FileUploader({ onClose, onUpload }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Perform upload logic here
    // You can use selectedFiles array to access the uploaded files
    // After successful upload, call the onUpload callback with the uploaded files
    onUpload(selectedFiles);
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <p style={{ fontWeight: "bold" }}>Upload Files</p>
          <button style={styles.closeButton} onClick={onClose}>Close</button>
        </div>
        <div style={styles.modalBody}>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
          />
          <button style={styles.uploadButton} onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  modalHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  closeButton: {
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: '#eee',
  },
  modalBody: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px',
  },
  uploadButton: {
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: '#eee',
  }
};
