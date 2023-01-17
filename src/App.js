import { useState } from "react";
import "./App.css";
import Drawer from "./drawer";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>okay</button>
      {show ? <Drawer /> : null}
    </div>
  );
}

export default App;
