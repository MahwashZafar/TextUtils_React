import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("Button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.handleAlert("Upper Case is Enabled" , "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.handleAlert("lower Case is Enabled" , "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.handleAlert("Clear Text is Enabled" , "success");
  };

  const handleReverseClick = () => {
    let newText = text;
    const reversed = reverseString(newText);
    setText(reversed);
    props.handleAlert("Reverse text is Enabled" , "success");
  };

  function reverseString(newText) {
    return newText.split("").reverse().join("");
    
  }

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.handleAlert("Copying text is Enabled" , "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.handleAlert("Handling Extra Spaces is Enabled" , "success");
  };

  return (
    <>
      <div className="container my-5" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor : props.mode === 'light' ? 'white' : '#042743' , color : props.mode === 'light' ? 'black' : 'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
