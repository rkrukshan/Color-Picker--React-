import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("white");

  function updateColor(event) {
    setColor(event.target.value);
  }
  return (
    <div className="cp-container">
      <h1 className="heading">Color Picker</h1>
      <div className="color-pad" style={{ backgroundColor: color }}>
        <label htmlFor="cp">Selected Color:{color}</label>
      </div>
      <br />
      <label htmlFor="scp" className="">Select Color</label>&nbsp;&nbsp;&nbsp;
      <input type="color" value={color} onChange={updateColor} />
    </div>
  );
}
export default ColorPicker;
