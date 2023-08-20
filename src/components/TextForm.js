import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
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
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
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
        <h1 className="mb-5">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor : props.mode === 'light' ? 'white' : '#13466e' , color : props.mode === 'light' ? 'black' : 'white'}}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>
          Reverse Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}
