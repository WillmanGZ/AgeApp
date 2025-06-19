//Obtenemos referencia de los elementos
const ageInput = document.getElementById("age");
const excBtn = document.getElementById("exec-btn");
const errorText = document.getElementById("error-text");
const resultText = document.getElementById("result-text");

//Añadimos interactividad al boton
excBtn.addEventListener("click", (event) => {
  //Prevenimos el evento por defecto
  event.preventDefault();

  //Tomamos el valor del input
  let age = parseInt(ageInput.value);

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
      resultText.textContent = `Tienes ${age}, eres mayor de edad!`;
    } else {
      resultText.textContent = `Tienes ${age}, eres menor de edad!`;
    }
  }
});
