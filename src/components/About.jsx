import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
  if (myStyle.backgroundColor === "#121212") {
    // switch to LIGHT
    setMyStyle({
      color: "black",
      backgroundColor: "white",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      padding: "20px",
      minHeight: "100vh",
    });
    setBtnText("Enable Dark Mode");
  } else {
    // switch to DARK
    setMyStyle({
      color: "#e5e7eb",
      backgroundColor: "#121212",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      padding: "20px",
      minHeight: "100vh",
    });
    setBtnText("Enable Light Mode");
  }
};

  return (
    <div className="fullpage " style={myStyle}>
      <div className="container my-5 ml-4 text-center">
        <h1 className="font-bold text-3xl mb-9">About This App</h1>
        <p>
          This is a simple text analyzer application built using React. It helps
          users manipulate text by converting it to uppercase, lowercase,
          copying text, and clearing content.
        </p>
        <p>
          This project is created for learning React concepts like components,
          props, state, and event handling.
        </p>
      </div>
      <div className="container my-3 ml-5">
        <button
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={toggleStyle}
        >
          {btntext}
        </button>
      </div>
    </div>
  );
}
