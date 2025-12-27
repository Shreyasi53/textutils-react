import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed");
  };

  const [text, setText] = useState("");

  // text= "new text";//wrong way to change the state
  // setText("new text");//correct way to change the state
  return (
    <>
      <div className="container" style={{
              backgroundColor: props.mode === "dark" ? "" : "white",
              color: props.mode === "dark" ? "#f9fafb" : "black",
            }}>
        <h1 className="text-3xl font-semibold mt-6 text-center">
          {props.heading}{" "}
        </h1>
        <div className="max-w-xl mx-auto mt-10 ">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="w-full h-40 border p-3 rounded"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#374151" : "white",
              color: props.mode === "dark" ? "#f9fafb" : "black",
            }}
          ></textarea>

          <div className="mt-4 gap-4 flex justify-center">
            <button
              className="mt-3 bg-green-800 text-white px-4 py-2 rounded"
              onClick={handleUpClick}
            >
              convert to UpperCase
            </button>
            <button
              className="mt-3 bg-green-800 text-white px-4 py-2 rounded"
              onClick={handleLowClick}
            >
              convert to LowerCase
            </button>
            <button
              className="mt-3 bg-green-800 text-white px-4 py-2 rounded"
              onClick={handleClearClick}
            >
              Clear Text
            </button>
            <button
              className="mt-3 bg-green-800 text-white px-4 py-2 rounded"
              onClick={handleCopyClick}
            >
              Copy
            </button>
            <button
              className="mt-3 bg-green-800 text-white px-4 py-2 rounded"
              onClick={handleExtraSpaces}
            >
              Remove Extra Space
            </button>
          </div>
        </div>
        <div className="cointainer my-2 mx-26">
          <h1 className="text-3xl font-semibold mt-6 "> Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2 className="text-2xl font-semibold my-6">Preview</h2>
          <p>{text.length>0?text: "Enter something to preview it here"}</p>
        </div>
      </div>
    </>
  );
}

//when we used classbase component then we have .this keyword to access props but in functional component we can directly use props without this keyword
// we can use useState hook to manage the state of the component
//in classbase component we have this.state and this.setstate to manage the state of the component
//hooks gives us properties of classbase component in functional component
