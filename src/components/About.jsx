import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btntext, setBtnText] = useState("Enable Dark Mode");

//   const toggleStyle = () => {
//   if (myStyle.backgroundColor === "#121212") {
//     // switch to LIGHT
//     setMyStyle({
//       color: "black",
//       backgroundColor: "white",
//       borderRadius: "8px",
//       transition: "all 0.3s ease",
//       padding: "20px",
//       minHeight: "100vh",
//     });
//     setBtnText("Enable Dark Mode");
//   } else {
//     // switch to DARK
//     setMyStyle({
//       color: "#e5e7eb",
//       backgroundColor: "#121212",
//       borderRadius: "8px",
//       transition: "all 0.3s ease",
//       padding: "20px",
//       minHeight: "100vh",
//     });
//     setBtnText("Enable Light Mode");
//   }
// };
let myStyle = {
  color: props.mode === "dark" ? "white" : "#121212",
  backgroundColor: props.mode === "dark" ? "#121212" : "white",
}

  return (
    <div className="fullpage " style={myStyle}>
      <div className="container my-5 ml-4 text-center">
        <h1 className="font-bold text-3xl mb-9">Analyze Your text</h1>
        <p>
          TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
          converting text case.
        </p>
        <p>
          This project is created for learning React concepts like components,
          props, state, and event handling.
          TextUtils is a free character counter tool that provides instant
          character count & word count statistics for a given text. TextUtils
          reports the number of words and characters. Thus it is suitable for
          writing text with word/ character limit.
        </p>
        <p>
          this word counter software works in any web browser such as Chrome,
          Firefox, Internet Explorer, Safari, Opera. It suits to count words in
          facebook, blog, books, excel document, pdf document, essays, etc.
        </p>
      </div>
      {/* <div className="container my-3 ml-5">
        <button
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={toggleStyle}
        >
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
