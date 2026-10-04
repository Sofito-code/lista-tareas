
const formulario = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");
const mensajeError = document.querySelector("#mensaje-error");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const texto = input.value.trim();

  // ---------------------------------------------
  // 3. Validación básica: el campo no puede estar vacío
  // ---------------------------------------------
  if (texto === "") {
    mensajeError.classList.remove("oculto");
    return; // detiene la función: no se agrega nada
  }
  mensajeError.classList.add("oculto");


  const item = document.createElement("li");
  item.textContent = texto;

  item.addEventListener("click", () => {
    item.classList.toggle("completada");
  });

  // ---------------------------------------------
  // 6. Botón para eliminar la tarea
  // ---------------------------------------------
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  botonEliminar.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que también se marque como completada
    item.remove();
  });

  item.appendChild(botonEliminar);
  lista.appendChild(item);

  // limpiar el campo para la siguiente tarea
  input.value = "";
  input.focus();
});
