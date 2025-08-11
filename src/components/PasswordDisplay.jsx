import { useState } from "react";
import "./PasswordDisplay.css";

function PasswordDisplay({ password }) {
  // Ver se o botão de copy ta sendo selecionado
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Funcionamento do botão de copiar

  const [isCopied, setIsCopied] = useState(false);

  // assync/await = tornam essa função Assíncrona -> os dois são uma interdependentes AWAIT EXIGE ASYNC
  // Analogia: ASSYNC = Garçom Especial -> permite o uso do AWAIT que diz a esse "garçom" para ir pegar o pedido e ESPERAR o prato ficar pronto, entretando o resto do restaurante (no caso o site, não para)
  // Resumo: Basicamene Assync/Await juntos servem para lidar com operações que podem demorar ( copiar para a area de transferencia, fazer uma chamada de rede, etc) sem travar a exp do usuario

  const handleCopy = async () => {
    if (!password) return;

    // LINHA MESTRA
    // NAVIGATOR: Obj Global do Navegador = da acesso a várias funcionalidade ( geoloc, camera, area de transf ...)
    // CLIPBOARD: API especifica para o "Copiar e Colar"
    // WriteText: Diz, basicamente, "escreva o conteúdo da var na area de transferencia" // essa operação não é instantanea

    await navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const passwordStyle = {
    color: password
      ? isHovering
        ? "var(--g200)"
        : "var(--green)"
      : "(hsl(245, 9%, 25%)",
  };

  const svgStyle = {
    color: isCopied
      ? "var(--yellow)"
      : password
      ? isHovering
        ? "var(--g200)"
        : "var(--green)"
      : "hsl(245, 9%, 25%)",
  };

  return (
    <div className="password-display">
      <svg
        width="21"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        className="copyButton"
        style={svgStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCopy}
      >
        <path
          d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
          fill="currentColor"
        />
      </svg>

      {isCopied ? (
        <span className="copied-text">COPIED TEXT</span>
      ) : (
        <span className="password-text" style={passwordStyle}>
          {password || "P4$5W0rD!"}
        </span>
      )}
    </div>
  );
}

export default PasswordDisplay;
