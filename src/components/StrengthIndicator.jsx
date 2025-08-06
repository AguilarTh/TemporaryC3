import "./StrengthIndicator.css";
import StrengthBar from "./StrengthBar";

// DEFINIÇÃO DOS NIVEIS DAS STRENGTHs

const strengthLevels = {
  0: { text: "", color: "transparent" },
  1: { text: "VULNERABLE", color: "hsl(0, 91%, 63%)" },
  2: { text: "WEAK", color: "hsl(13, 95%, 66%)" },
  3: { text: "MEDIUM", color: "hsl(42, 91%, 68%)" },
  4: { text: "STRONG", color: "hsl(127, 44%, 62%)" },
};

function StrengthIndicator({ passwordStrength }) {
  // Seleciona um strengthLevel de acordo com o passwordStength, se não tiver recebido nenhum paramet vai utilizar o level "0" = valor inicial
  const currentStrength = strengthLevels[passwordStrength] || strengthLevels[0];

  //   style para mudar a cor do "current-strength-text"
  const strengthTextStyle = {
    color: currentStrength.color,
  };

  return (
    <div className="strength-indicator-container">
      <span>STRENGTH</span>
      <div className="indicator-bar-container">
        {/* a propriedade "style" serve para aplicar estilo CSS inline no JSX,ela recebe como param um objeto JS, se essa mudança de estilo for curta da para colocar ja direto na linha usando style = {{...}}, se nn, faz um obj JS separado e dps passa para essa prop */}
        <span className="current-strength-text" style={strengthTextStyle}>
          {currentStrength.text}
        </span>
        <div className="indicator-bars">
          {/* Metodo de array para olhar quais barras devem ser preenchidas ou não */}
          {[1, 2, 3, 4].map((barLevel) => (
            <StrengthBar
              // a key vai servir como um crachá para o React organizar uma "fila"
              key={barLevel}
              isActive={barLevel <= passwordStrength}
              color={currentStrength.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrengthIndicator;
