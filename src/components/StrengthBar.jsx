import "./StrengthBar.css";

// o isActive aq vai se referir se a barra vai precisar ser preenchida ou nao
// T = usa a cor respectiva da força da senha
// F = deixa como uma barra "padrão" => sem fundo // borda cinza claro

function StrengthBar({ isActive, color }) {
  const style = {
    backgroundColor: isActive ? color : "transparente",
    borderColor: isActive ? color : "hsl(252, 11%, 91%)",
  };

  return <div className="strength-bar" style={style}></div>;
}

export default StrengthBar;
