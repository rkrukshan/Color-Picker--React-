import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#fffffff");

  function updateColor(event){
    setColor(event.targe)
  }
}
