const form = document.querySelector("form");
const result = document.getElementById("result");
const rightContent = document.getElementById("rightContent");
const qtNumeros = document.getElementById("qtNumeros");
const intervaloInicial = document.getElementById("intervaloInicial");
const intervaloFinal = document.getElementById("intervaloFinal");
const repetirNumero = document.getElementById("repetirNumero");

form.onsubmit = function(event) {
  event.preventDefault();

  result.classList.remove("hidden");
  rightContent.classList.add("hidden");

  SortearNumeros(
    parseInt(qtNumeros.value),
    parseInt(intervaloInicial.value),
    parseInt(intervaloFinal.value),
    repetirNumero.checked
  );
};

function SortearNumeros(qtde, min, max, repetirNumero = false) {
  const numeros = [];

  while (numeros.length < qtde) {
    const numero = Math.floor(Math.random() * (max - min + 1) + min);
    if (repetirNumero || !numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  const lista = document.getElementById("listaNumeros");
  lista.innerHTML = "";

  numeros.forEach(numero => {
    const li = document.createElement("li");
    li.className = "text-center text-content-brand font-['Roboto_Mono'] font-bold text-[48px] leading-[150%] tracking-normal";
    li.textContent = numero;
    li.classList.add("animate-girar");
    lista.appendChild(li);
  });
}
