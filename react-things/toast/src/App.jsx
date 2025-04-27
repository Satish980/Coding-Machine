import "./App.css";
import Notification from "./components/Notification";
import useNotification from "./hooks/useNotification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");
  return (
    <>
      <h1>Toast Component</h1>
      <div className="buttons">
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "Notification triggered",
              duration: 3000
            })
          }
          className={'btn success'}
        >
          Success
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "Notification triggered",
              duration: 3000
            })
          }
          className="btn error"
        >
          Error
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "Notification triggered",
              duration: 3000
            })
          }
          className="btn info"
        >
          Info
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "Notification triggered",
              duration: 3000
            })
          }
          className="btn warning"
        >
          Warning
        </button>
      </div>
      {NotificationComponent}
    </>
  );
}

export default App;
