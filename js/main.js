//Obtenemos referencia de los elementos
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const excBtn = document.getElementById("exec-btn");
const errorText = document.getElementById("error-text");
const resultText = document.getElementById("result-text");

//Añadimos interactividad al boton
excBtn.addEventListener("click", (event) => {
  //Prevenimos el evento por defecto
  event.preventDefault();

  //Tomamos el valor del input
  const name = nameInput.value;
  let age = parseInt(ageInput.value);

  //Reseteamos los mensajes
  errorText.textContent = "";
  resultText.textContent = "";

  //Validamos que sea un número válido y que sea un número entre 0 y 100
  if (isNaN(age)) {
    ageInput.value = null;
    errorText.textContent =
      "Número invalido, por favor digite un número entre 0 y 100";
  } else if (age > 100 || age < 0) {
    ageInput.value = null;
    errorText.textContent =
      "Número invalido, por favor digite un número entre 0 y 100";
  } else {
    //Una vez validado, hacemos la evaluación y le damos un mensaje al usuario
    errorText.textContent = "";
    if (age > 18) {
      resultText.textContent = `Hola ${name}, tienes ${age}, eres mayor de edad!`;
    } else {
      resultText.textContent = `Hola ${name}, tienes ${age}, eres menor de edad!`;
    }
  }
});
