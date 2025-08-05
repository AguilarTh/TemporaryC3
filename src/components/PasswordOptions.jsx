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
          <input type="range" name="passwordLenght" id="iPasswordLenght" />
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
          <h1>TESTE</h1>
          <span>imagem</span>
        </div>
      </div>

      <div className="generate-button">
        <button type="submit">GENERATE</button>
        <img src="src\assets\icon-check.svg" alt="" />
      </div>
    </div>
  );
}

export default PasswordOptions;
