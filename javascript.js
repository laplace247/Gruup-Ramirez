$(document).ready(function () {
    // Inicializar el slider
    $("#carouselExample").carousel();
  
    // Cambiar en automatico las img cada 3 segs
    setInterval(function () {
      $("#carouselExample").carousel("next"); // Cambiar a la siguiente imagen
    }, 3000); // 3000 milisegundos = 3 segundos
  });
  