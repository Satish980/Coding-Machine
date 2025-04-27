import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import "./styles.css";

const iconStyles = {
  marginRight: "10px",
};
const icons = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};
const Notification = ({ type = "info", message = "", onClose = () => {} }) => {
  return (
    <div className={`notification ${type}`}>
      {/* icon */}
      {icons[type]}
      {/* message */}
      {message}
      {/* close button */}
      <AiOutlineClose color="white" onClick={onClose} className="close-btn" />
    </div>
  );
};

export default Notification;
