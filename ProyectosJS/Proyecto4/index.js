const cronometro = document.getElementById("cronometro");
const botonInicioPausa = document.getElementById("boton_inicio_pausa");
const botonReiniciar = document.getElementById("boton_reiniciar");

let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = "pausado";
const actualizarCronometro = () => {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
};

const asignarFormato = (unidadDeTiempo) => {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
};

botonInicioPausa.addEventListener("click", () => {
  if (estadoCronometro === "pausado") {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  height="70" fill="currentColor" class="bi bi-pause-btn" viewBox="0 0 16 16">
  <path d="M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>`;
    botonInicioPausa.classList.remove("iniciar");
    botonInicioPausa.classList.add("pausar");
    estadoCronometro = "Encendido";
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="70"
    fill="currentColor"
    class="bi bi-play-btn"
    viewBox="0 0 16 16">
    <path
      d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
    <path
      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
  </svg>`;
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
  }
});

botonReiniciar.addEventListener("click", () => {
  window.clearInterval(intervaloDeTiempo);

  segundos = 0;
  minutos = 0;
  horas = 0;

  cronometro.innerText = "00:00:00";
  botonInicioPausa.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  height="70"
  fill="currentColor"
  class="bi bi-play-btn"
  viewBox="0 0 16 16">
  <path
    d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
  <path
    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
</svg>`;
  botonInicioPausa.classList.remove("pausar");
  botonInicioPausa.classList.add("iniciar");
  estadoCronometro = "pausado";
});
