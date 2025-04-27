import { useState } from "react";
import Notification from "../components/Notification";
import { useCallback } from "react";

const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = useCallback((notificationProps) => {
    const id = Date.now();

    // appending multiple notifications
    setNotifications((prev) => [...prev, { id, ...notificationProps }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((toast) => toast.id !== id));
    }, notificationProps?.duration);
  }, []);

  const onClose = (notificationId) => {
    setNotifications((prev) => prev.filter((toast) => toast.id !== notificationId));
  }

  const NotificationComponent = (
    <div className={`${position}`} style={{ position: "fixed", zIndex: 999 }}>
      {notifications?.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => onClose(notification.id)}
        />
      ))}
    </div>
  );

  return {
    NotificationComponent,
    triggerNotification,
    onClose,
  };
};

export default useNotification;
