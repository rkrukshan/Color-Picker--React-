import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#fffffff");

  function updateColor(event) {
    setColor(event.target.value);

    return (
      <div className="cp-container">
        <h1 className="heading">Color Picker</h1>
        <div className="color-pad">
          <label htmlFor="cp">Selected Color:{color}</label>
        </div>
        
      </div>
    );
  }
}
