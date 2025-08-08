import "./PasswordOptions.css";
import { useEffect, useState } from "react";
import StrengthIndicator from "./StrengthIndicator";
import { generatePassword, evaluateStrength } from "./PasswordFunctions";

function PasswordOptions({ setPassword }) {
  // --- DEFINIÇÃO DE useStates

  const [passwordLenght, setPasswordLenght] = useState(0);
  const [rangeBarBg, setRangeBarBg] = useState("");
  const [strength, setStrength] = useState("default"); // força em texto agora

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
  }, []);

  // Função que lê os checkbox e gera senha, atualiza força e envia senha para o pai (App)
  const handleGenerateClick = () => {
    const options = {
      length: Number(passwordLenght),
      includeUppercase: document.getElementById("iUppercaseButton").checked,
      includeLowercase: document.getElementById("iLowercaseButton").checked,
      includeNumbers: document.getElementById("iNumbersButton").checked,
      includeSymbols: document.getElementById("iSymbolsButton").checked,
    };

    // Gera a senha com as opções
    const newPassword = generatePassword(options);

    // Atualiza a senha no App (pai)
    setPassword(newPassword);

    // Avalia força da senha e atualiza local
    const strengthResult = evaluateStrength(newPassword, options); // retorno tipo string

    // Conversão para um valor padrão reconhecido pelo StrengthIndicator
    const normalizedStrength = (() => {
      switch (strengthResult.toLowerCase()) {
        case "vulnerável":
        case "vulnerable":
          return "vulnerable";
        case "fraca":
        case "weak":
          return "weak";
        case "média":
        case "medium":
          return "medium";
        case "forte":
        case "strong":
          return "strong";
        default:
          return "default";
      }
    })();

    setStrength(normalizedStrength);
  };

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
            // REFERENCIA DA FUNÇÃO = Log de evento + complexa
            // ARROW FUNCTION INLINE = Log de evento simples + curta
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
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="uppercaseButton"
            id="iUppercaseButton"
            className="increment-button"
          />
          <label htmlFor="iUppercaseButton">Include Uppercase Letters</label>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="lowercaseButton"
            id="iLowercaseButton"
            className="increment-button"
          />
          <label htmlFor="iLowercaseButton">Include Lowercase Letters</label>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="numbersButton"
            id="iNumbersButton"
            className="increment-button"
          />
          <label htmlFor="iNumbersButton">Include Numbers</label>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="symbolsButton"
            id="iSymbolsButton"
            className="increment-button"
          />
          <label htmlFor="iSymbolsButton">Include Symbols</label>
        </div>
      </div>

      {/* componente que mostra visualmente a força da senha */}
      <StrengthIndicator passwordStrength={strength} />

      {/* *Coloquei o botão de gerar a senha na DIV para q o botão funcione em todo a extensão dele */}
      <div className="generate-button" onClick={handleGenerateClick}>
        <button type="button">GENERATE</button>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </div>
    </div>
  );
}

export default PasswordOptions;
