let botonElem = document.getElementById("boton_cambiar_cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

let generarEnteroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let cambiarCita =()=>{
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.innerHTML = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
  
};
cambiarCita();

botonElem.addEventListener('click', cambiarCita)
