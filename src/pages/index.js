import React, { useState } from "react";

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const handleInput1Change = (event) => {
    setInput1(parseFloat(event.target.value) || 0);
  };

  const handleInput2Change = (event) => {
    setInput2(parseFloat(event.target.value) || 0);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <input
        type="number"
        placeholder="Enter a number"
        value={input1}
        onChange={handleInput1Change}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <input
        type="number"
        placeholder="Enter another number"
        value={input2}
        onChange={handleInput2Change}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <div style={{ fontWeight: "bold", marginTop: "10px" }}>
        Total: {input1 + input2}
      </div>
    </div>
  );
}

export default App;
