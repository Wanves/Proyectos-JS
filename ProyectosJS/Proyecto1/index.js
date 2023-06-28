const boton = document.querySelector("button");
const color = document.getElementById("color");

const generarColorHexAleatorio = () => {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
};

boton.addEventListener("click", (e) => {
  let colorAleatorio = generarColorHexAleatorio();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
  boton.style.backgroundColor = colorAleatorio;
  boton.style.boxShadow = "0 0 .5rem black";
});
