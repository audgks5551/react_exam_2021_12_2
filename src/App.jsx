import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        onChange={({ target: { value } }) => {
          setText(value);
        }}
        value={text}
      />
    </div>
  );
};

export default App;
