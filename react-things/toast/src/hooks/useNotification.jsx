import { useState } from "react";
import Notification from "../components/Notification";
import { useCallback } from "react";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);

  let timer;
  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps?.duration);
  }, []);
  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : (
    <></>
  );

  return {
    NotificationComponent,
    triggerNotification,
  };
};

export default useNotification;
