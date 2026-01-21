const buttons = document.getElementById("btns");
const resultado = document.getElementById("resultado");

buttons.addEventListener("click", operar);

function operar(e) {
  // Check that a button was clicked
  if (e.target.tagName !== "BUTTON") return;

  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);

  let res;

  switch (e.target.id) {
    case "suma":
      res = numero1 + numero2;
      break;

    case "resta":
      res = numero1 - numero2;
      break;

    case "multiplica":
      res = numero1 * numero2;
      break;

    case "divide":
      if (numero2 === 0) {
        res = "No se puede dividir por 0";
      } else {
        res = numero1 / numero2;
      }
      break;
    default:
     alert("Funcionalidad en progreso");
  }

  resultado.textContent = res;
}
