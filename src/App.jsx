import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Notification from "./components/Notification";

function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  // Handler function to update the state when the textarea is edited
  const handleTextareaChange = (event) => {
    var input = event.target.value;
    setTextareaValue(input.replace(/[^a-zA-Z]+/g, " "));
  };

  const glowingStyle = {
    backgroundColor: "#3b82f6",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    boxShadow: "0 0 5px #3b82f6",
    transition: "box-shadow 0.3s ease-in-out",
    marginTop: "15px",
  };

  const handleCopyToClipboard = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    if (textareaValue == "") {
      setCopyStatus("Please input text");
    } else {
      navigator.clipboard
        .writeText(textareaValue)
        .then(() => {
          // Clipboard write successful
          setCopyStatus("Copied to clipboard: " + textareaValue);
        })
        .catch((error) => {
          // Clipboard write failed
          setCopyStatus("Failed to copy to clipboard: " + error);
        });
    }
  };

  return (
    <>
      <h1>Paste.it</h1>
      <p className="read-the-docs">Paste any text to remove its formatting</p>
      <button style={glowingStyle} onClick={handleCopyToClipboard}>
        Copy to Clipboard
      </button>
      <div className="card">
        <div class="w-full p-4 bg-gray-900 rounded-lg shadow-md">
          <textarea
            class="w-full h-32 p-2 resize-none bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=" Enter your text here..."
            onChange={handleTextareaChange}
          ></textarea>
        </div>
        {textareaValue}
      </div>
      {showNotification && (
        <Notification message={copyStatus} duration={5000} />
      )}
    </>
  );
}

export default App;
