import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert"
// import { Route, Routes } from "react-router-dom";
// import About_1 from "./components/About_1";


function App() {

  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState("");
  
  const handleAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      handleAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Home (Dark Mode)";
    }
      //just for practice:
      // setInterval(() => {
      //   document.title = "This App is amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Explore the App";
      // }, 3000);

    
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      handleAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Home (Light Mode)";
    }
  }

  // const barbieMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor = 'black';
  //     handleAlert("Barbie Dark mode has been enabled", "success");
  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     handleAlert("Light mode has been enabled", "success");
  //   }
  // }

  return (
    <>    
        {/* <Route path="/Navbar" element={< Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>}/> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm handleAlert={handleAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>

      {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm handleAlert={handleAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>} />
      </Routes> */}
    </>
  );
}

export default App;
