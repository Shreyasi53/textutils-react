import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import About from "./components/About.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "light"
  );

  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // 🔔 Central alert handler
  const showAlertMessage = (message) => {
    setAlertMsg(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
  };

  // ✅ Sync side-effect on load & mode change
  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "dark" ? "#121212" : "white";
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);

    showAlertMessage(
      newMode === "dark"
        ? "Dark mode has been enabled"
        : "Light mode has been enabled"
    );
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* CLS-safe alert */}
      <Alert alert={showAlert ? alertMsg : ""} />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="TextUtils- Word Counter & Text Manipulator"
              mode={mode}
              showAlert={showAlertMessage}
            />
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
