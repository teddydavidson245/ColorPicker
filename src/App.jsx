import { useState } from "react";
// Write your Color component here
// const Color = (props) => {
  
//   return <div className={props.color}></div>
// }

const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color = "green" setSelectedColor={setSelectedColor}/>
        <Color color = "red" setSelectedColor={setSelectedColor}/>
        <Color color = "black" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
