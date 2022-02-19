import React, { useRef, useState } from "react";
import { memo } from "react";
import "./style.css";

const Input = ({ onChange, value = "", placeholder = "" }) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    inputRef.current.focus();
    setFocused(true);
  };

  return (
    <div
      className={`input-wrapper ${focused ? "focus" : ""}`}
      onClick={handleFocus}
      onBlur={() => setFocused(false)}
    >
      <input
        ref={inputRef}
        className="input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(Input);
