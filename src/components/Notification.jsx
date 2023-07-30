import React, { useState, useEffect } from "react";
import "./Notification.css"; // Import your custom CSS for notification styles

const Notification = ({ message, duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="notification-container">
      <div className="notification-slide-fade">
        <div className="notification-content">
          <span>{message}</span>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Notification;
