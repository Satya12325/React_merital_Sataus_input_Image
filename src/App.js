import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import Form from "./Components/Form";

export default function App() {
  const ref = useRef(null);
  const inputRef = useRef(null);

  const handleMoveToTop = () => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  };

  const focusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Form />
      <hr />
      <hr />
      <button onClick={handleMoveToTop}>Move to top</button>
      <button onClick={focusOnInput}>Focus</button>
      <input ref={inputRef} />
      <div
        ref={ref}
        style={{
          maxHeight: 200,
          overflow: "auto",
          border: "1px solid black",
          padding: 20,
          width: 200
        }}
      >
        <div
          style={{
            height: 1024,
            border: "1px solid black"
          }}
        ></div>
      </div>
    </div>
  );
}
