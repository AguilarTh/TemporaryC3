import "./PasswordOptions.css";
import IncrementButton from "./IncrementButton.jsx";

function PasswordOptions() {
  return (
    <div className="password-options">
      <div className="password-lenght">
        <div className="top-box">
          <label htmlFor="iPasswordLenght">Character Lenght</label>
          <span>0</span>
        </div>
        <form>
          <input
            type="range"
            min={0}
            max={20}
            name="passwordLenght"
            id="iPasswordLenght"
            className="password-range-lenght"
          />
        </form>
      </div>

      <div className="password-increment-options">
        <IncrementButton incrementElement="Uppercase Letters" />
        <IncrementButton incrementElement="Lowercase Letters" />
        <IncrementButton incrementElement="Numbers Letters" />
        <IncrementButton incrementElement="Symbols Letters" />
      </div>

      <div className="password-strength">
        <h2>STRENGTH</h2>
        <div className="strength-indicator">
          <h1>teste</h1>
          <span className="strength-bar">barra de força</span>
        </div>
      </div>

      <div className="generate-button">
        <button>GENERATE</button>
        <img src="src\assets\icon-arrow-right.svg" alt="" />
      </div>
    </div>
  );
}

export default PasswordOptions;
