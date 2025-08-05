import "./PasswordOptions.css";
import IncrementButton from "./IncrementButton.jsx";
import { useEffect, useState } from "react";

function PasswordOptions() {
  // --- DEFINIÇÃO DE useStates

  const [passwordLenght, setPasswordLenght] = useState(10);
  const [rangeBarBg, setRangeBarBg] = useState("");

  // FUNÇÃO GLOBAL para o "rangeBar" => ( cada elemento so pode receber 1 função Onclick)
  const onRangeBarChange = (e) => {
    const rangeBar = e.target;
    const value = rangeBar.value;

    // atualização do SPAN INDICADOR DO LENGHT
    setPasswordLenght(value);

    // atualização da COR DE FUNDO DA BARRA de acordo com o valor => Usando o linear gradient
    const min = rangeBar.min;
    const max = rangeBar.max;
    const porcent = ((value - min) / (max - min)) * 100;

    const fillColor = "hsl(127, 44%, 62%)";
    const bgColor = "hsl(248, 15%, 11%)";

    const novoBackground = `linear-gradient(to right, ${fillColor} ${porcent}%, ${bgColor} ${porcent}%)`;

    setRangeBarBg(novoBackground);
  };

  // useEffect = hook do react para realizar/gerenciar operações que não são totalmente reativas, especificando quando uma ação deve ser usada
  // nesse caso para executar a lógica apenas uma vez quando o componente carrega
  useEffect(() => {
    // criação de um evento falso para passar inicialmente a função de mudança do rangeBar
    const fakeEvent = { target: { value: passwordLenght, min: 0, max: 20 } };
    onRangeBarChange(fakeEvent);
  }),
    // esse segundo argumento é responsavel pela "lista de gatilhos" para executar novamente o useEffect, como so precisa inicialmente,  utiliza-se a string vazia
    [];

  return (
    <div className="password-options">
      <div className="password-lenght">
        <div className="top-box">
          <label htmlFor="iPasswordLenght">Character Length</label>
          <span>{passwordLenght}</span>
        </div>
        <form>
          <input
            type="range"
            min={0}
            max={20}
            value={passwordLenght}
            // REFERENCIA DA FUNÇÃO = Log de evento + complexa // ARROW FUNCTION INLINE = Log de evento simples + curta
            // exemp: onChange = setPasswordLenght
            onChange={onRangeBarChange}
            style={{ background: rangeBarBg }}
            name="passwordLenght"
            id="iPasswordLenght"
            className="password-range-lenght"
          />
        </form>
      </div>

      <div className="password-increment-options">
        <IncrementButton incrementElement="Uppercase Letters" />
        <IncrementButton incrementElement="Lowercase Letters" />
        <IncrementButton incrementElement="Numbers" />
        <IncrementButton incrementElement="Symbols" />
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
