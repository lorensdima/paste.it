import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";

function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  // Handler function to update the state when the textarea is edited
  const handleTextareaChange = (event) => {
    var input = event.target.value;
    input = input.replace(/[^a-zA-Z.,0-9]+/g, " ");
    setTextareaValue(input);
  };

  const glowingStyle = {
    backgroundColor: "#3b82f6",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    boxShadow: "0 0 5px #3b82f6",
    transition: "box-shadow 0.3s ease-in-out",
    marginBottom: "15px",
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
      <h1 className="text-2xl font-bold">Paste.it</h1>
      <p className="read-the-docs">Paste any text to remove its formatting</p>

      <div className="card">
        <div class="w-full rounded-lg">
          <textarea
            class="w-full h-32 p-2 resize-none bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            placeholder="Enter your text here..."
            onChange={handleTextareaChange}
          ></textarea>
        </div>
      </div>
      <button style={glowingStyle} onClick={handleCopyToClipboard}>
        Copy to Clipboard
      </button>

      <div className="card">
        <div class="w-full rounded-lg">
          <textarea
            class="w-full h-32 p-2 resize-none bg-gray-700 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            placeholder="Output here"
            value={textareaValue}
            disabled="true"
          >
            {" "}
          </textarea>
        </div>
      </div>

      {showNotification && (
        <Notification message={copyStatus} duration={5000} />
      )}
    </>
  );
}

export default App;
