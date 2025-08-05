import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordOptions from "./components/PasswordOptions";
import IncrementButton from "./components/IncrementButton";

function App() {
  return (
    <div className="container">
      <h1 className="tittle">Password Generator</h1>
      <PasswordDisplay />
      <PasswordOptions />
    </div>
  );
}
export default App;
