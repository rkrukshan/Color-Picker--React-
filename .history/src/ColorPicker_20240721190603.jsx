import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("white");

  function updateColor(event) {
    setColor(event.target.value);
  }
  return (
    <div className="cp-container">
      <h1 className="heading">Color Picker</h1>
      
      <br />
      <div className="btncp">
        <label htmlFor="scp" className="selectlabel">
          Select Color
        </label>
        <br />
        <input
          type="color"
          value={color}
          onChange={updateColor}
          className="colorpicker"
        />
      </div>
    </div>
  );
}
export default ColorPicker;
