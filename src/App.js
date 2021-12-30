
import './App.css';
import {useState} from "react";

function App() {
  let items = ['🍎', '😄', '🎈', '♥️', '🍓', '🐱'];

  let [XinitValue, XupValue] = useState("X");
  let [YinitValue, YupValue] = useState("Y");
  let [ZinitValue, ZupValue] = useState("Z");
  

  let SpinFunc = () => {
    
    XupValue(items[Math.floor(Math.random()*5)]);
    YupValue(items[Math.floor(Math.random()*5)]);
    ZupValue(items[Math.floor(Math.random()*5)]);
  }
   

  return (
    <>
<div className = "main">
  <div className = "slotMain">
  <div className = "slotItems">
  <div className='item'><h1>{XinitValue}</h1></div> 
  <div className='item'><h1>{YinitValue}</h1></div> 
  <div className='item'><h1>{ZinitValue}</h1></div> 
    
  </div>
    <h1 id = "res">{(XinitValue===YinitValue && YinitValue === ZinitValue)? <span>Match</span> : <span>Keep Spinning</span>}</h1>
  </div>
  <div className = "button">
    <button onClick = {SpinFunc}>SPIN</button>
  </div>
</div>
    </>
  );
}

export default App;
