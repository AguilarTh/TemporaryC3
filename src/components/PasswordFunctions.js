// GERADOR DE SENHA

export function generatePassword(options) {
  const {
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  } = options;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allChars = "";
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (!allChars) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allChars.length);
    password += allChars[index];
  }
  return password;
}

//FORÇA

export function evaluateStrength(password, options) {
  let score = 0;
  let scoreVar = 0;
  const {
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    length,
  } = options;

  if (includeUppercase) scoreVar++;
  if (includeLowercase) scoreVar++;
  if (includeNumbers) scoreVar++;
  if (includeSymbols) scoreVar++;
  score = length * 0.05 * scoreVar;

  // Mudei a log do score pq tava dando q uma senha com 2 digitos era strong se tivesse tudo marcado
  // nn sei se é a melhor ainda, olhar melhor dps

  if (score <= 1) {
    return "vulnerable";
  } else if (score <= 2) {
    return "weak";
  } else if (score <= 3) {
    return "medium";
  } else return "strong";
}
