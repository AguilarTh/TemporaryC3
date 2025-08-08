import { useState } from "react";
import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordOptions from "./components/PasswordOptions";

function App() {
  
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1 className="tittle">Password Generator</h1>
      <PasswordDisplay password={password} />
      <PasswordOptions setPassword={setPassword} />
    </div>
  );
}

export default App;
