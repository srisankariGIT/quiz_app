import React from 'react';
import './CustomAlert.css'; // Import the CSS for styling

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        {/* <button className="custom-alert-close" onClick={onClose}>×</button> */}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert;
