import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import About from "./components/About.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  const [mode, setMode] = useState("light");
  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // 🔔 Central alert handler (used everywhere)
  const showAlertMessage = (message) => {
    setAlertMsg(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlertMessage("Dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlertMessage("Light mode has been enabled");
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {showAlert && (
        <Alert alert={alertMsg} onClose={() => setShowAlert(false)} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="Enter the text to analyze"
              mode={mode}
              showAlert={showAlertMessage}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
