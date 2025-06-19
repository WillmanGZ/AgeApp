//Obtenemos referencia de los elementos
const ageInput = document.getElementById("age");
const excBtn = document.getElementById("exec-btn");

//Añadimos interactividad al boton
excBtn.addEventListener("click", (event) => {
  //Prevenimos el evento por defecto
  event.preventDefault();

  //Tomamos el valor del input
  let age = parseInt(ageInput.value);

  //Validamos que sea un número válido y que sea un número entre 0 y 100

});
