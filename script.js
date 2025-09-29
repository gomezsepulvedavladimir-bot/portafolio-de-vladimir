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

// Animación al hacer scroll
const faders = document.querySelectorAll(".fade-in");

const aparecer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  aparecer.observe(fader);
});

// Botón arriba
const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
});

btnArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
