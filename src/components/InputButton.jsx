import React from "react";

import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const InputButton = ({ addNewToDoItem }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    let newVal = value.split(" ").join("");
    if (newVal.length === 0) {
      alert(`input value should be valid!`);
      return;
    }
    if (newVal.length > 32) {
      alert(`too many characters ${newVal.length}`);
      return;
    }
    addNewToDoItem(value);
    setValue("");
  }

  return (
    <div className="flex">
      <Input type="text" value={value} onInputChange={handleChange} />
      <Button onButtonClick={handleClick} />
    </div>
  );
};

export default InputButton;
