import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function About(props) {
  // const [btntext, setBtntext] = useState("Enable Dark Mode");

//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#416497',
    backgroundColor: props.mode === 'dark' ? '#416497' : 'white',
    // border: '2px solid',
    // borderColor: props.mode === 'dark' ? 'white' : '#416497'
  }

  return (
    <div className="container my-5" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="0" style={myStyle}>
          <Accordion.Header><strong>Analyze Your Text</strong></Accordion.Header>
          <Accordion.Body>
            TextUtils gives you a way to analyze your text quickly and
            efficiently. Be it word count, character count, etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={myStyle}>
          <Accordion.Header><strong>Free To Use</strong></Accordion.Header>
          <Accordion.Body>
            TextUtils is a free character counter tool that probides instant
            character count and word count statistics for a given text.
            TextUtils reports the number of words and characters. Thus it is
            suitable for writing text with word/ character limit.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={myStyle}>
          <Accordion.Header><strong>Browser Compatible</strong></Accordion.Header>
          <Accordion.Body>
            This word counter software works in any web browsers such as Chrome,
            Firefox, Internet Explorer, Safari, Opera. It suits to count
            characters in facebook, blog, books, excel document, pdf document,
            essays, etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

    // <div className='container my-5' style={myStyle}>
    //     <h1 className='my-2'>About Us</h1>
    //         <div className="accordion" id="accordionExample" style={myStyle}>
    //         <div className="accordion-item">
    //             <h2 className="accordion-header">
    //             <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //                 Analyze Your Text
    //             </button>
    //             </h2>
    //             <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={myStyle}>
    //                 TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, etc.
    //             </div>
    //             </div>
    //         </div>
    //         <div className="accordion-item">
    //             <h2 className="accordion-header">
    //             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    //                 Free To Use
    //             </button>
    //             </h2>
    //             <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={myStyle}>
    //                 TextUtils is a free character counter tool that probides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
    //             </div>
    //             </div>
    //         </div>
    //         <div className="accordion-item">
    //             <h2 className="accordion-header">
    //             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    //                 Browser Compatible
    //             </button>
    //             </h2>
    //             <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    //             <div className="accordion-body" style={myStyle}>
    //                 This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
    //             </div>
    //             </div>
    //         </div>
    //     </div>

    // </div>
  );
}
