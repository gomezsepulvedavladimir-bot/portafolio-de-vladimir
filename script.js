// Mostrar/Ocultar proyecto
const btnProyecto = document.getElementById("toggleProyecto");
const contenidoProyecto = document.getElementById("proyectoContenido");

btnProyecto.addEventListener("click", () => {
  if (contenidoProyecto.style.display === "block") {
    contenidoProyecto.style.display = "none";
  } else {
    contenidoProyecto.style.display = "block";
  }
});

// Validación de formulario
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  if (!correo.includes("@")) {
    alert("Por favor ingrese un correo válido.");
    return;
  }

  alert("¡Formulario enviado correctamente!");
  formulario.reset();
});