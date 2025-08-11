import "./StrengthIndicator.css";
import StrengthBar from "./StrengthBar";

// DEFINIÇÃO DOS NIVEIS DAS STRENGTHs com textos e cores
const strengthLevels = {
  0: { text: "", color: "transparent" },
  1: { text: "VULNERABLE", color: "hsl(0, 91%, 63%)" },
  2: { text: "WEAK", color: "hsl(13, 95%, 66%)" },
  3: { text: "MEDIUM", color: "hsl(42, 91%, 68%)" },
  4: { text: "STRONG", color: "hsl(127, 44%, 62%)" },
};

// Mapeia os textos recebidos para os níveis numéricos esperados
const strengthTextToLevel = {
  "": 0,
  default: 0,
  vulnerable: 1,
  weak: 2,
  medium: 3,
  strong: 4,
};

function StrengthIndicator({ passwordStrength }) {
  // Se passwordStrength for string, converte para número usando o map, senão usa 0
  const numericStrength =
    typeof passwordStrength === "string"
      ? strengthTextToLevel[passwordStrength.toLowerCase()] ?? 0
      : passwordStrength;

  // Seleciona um strengthLevel de acordo com o numericStrength, se não tiver recebido nenhum param vai utilizar o level "0" = valor inicial
  const currentStrength = strengthLevels[numericStrength] || strengthLevels[0];

  // style para mudar a cor do "current-strength-text"
  const strengthTextStyle = {
    color: currentStrength.color,
  };

  return (
    <div className="strength-indicator-container">
      <span className="strength-word">STRENGTH</span>
      <div className="indicator-bar-container">
        {/* a propriedade "style" serve para aplicar estilo CSS inline no JSX, ela recebe como param um objeto JS, se essa mudança de estilo for curta da para colocar já direto na linha usando style={{...}}, se não, faz um obj JS separado e depois passa para essa prop */}
        <span className="current-strength-text" style={strengthTextStyle}>
          {currentStrength.text}
        </span>
        <div className="indicator-bars">
          {/* Método de array para olhar quais barras devem ser preenchidas ou não */}
          {[1, 2, 3, 4].map((barLevel) => (
            <StrengthBar
              // a key vai servir como um crachá para o React organizar uma "fila"
              key={barLevel}
              isActive={barLevel <= numericStrength}
              color={currentStrength.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrengthIndicator;
