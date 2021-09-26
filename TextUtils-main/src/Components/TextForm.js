import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Text Converted to Uppercase!");
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Text Converted to Lowercase!");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("success", "Text Cleared!");
  };

  const handleCopyText = () => {
    const selectText = document.getElementById("myBox");
    selectText.select();
    navigator.clipboard.writeText(selectText.value);
    props.showAlert("success", "Copied to Clipboard!");
  };

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra Spaces Removed!");
  };

  const handleTextareaOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === `light` ? `black` : `white` }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            style={{
              backgroundColor: props.mode === `light` ? `white` : `#021228`,
              color: props.mode === `light` ? `black` : `white`,
            }}
            onChange={handleTextareaOnChange}
            rows="8"
          ></textarea>
        </div>
        <div
          className="btn-group flex-wrap"
          role="group"
          aria-label="Basic example"
        >
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary" onClick={handleClearText}>
            Clear Text
          </button>
          <button className="btn btn-primary" onClick={handleCopyText}>
            Copy Text
          </button>
          <button className="btn btn-primary" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === `light` ? `black` : `white` }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <strong>{text.split(" ").length}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").length}</strong> Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
