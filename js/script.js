<<<<<<< HEAD
// Este escript solo sirve para que el popovers en la etiqueta a valla
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    trigger: "focus",
  });
});

// Controles de los botones del video
const video = document.getElementById('miVideo');

function controlarVideo(accion) {
  switch(accion) {
    case 'play':
      video.play();
      break;
    case 'pause':
      video.pause();
      break;
    case 'stop':
      video.pause();
      video.currentTime = 0;
      break;
    case 'vol-':
      if (video.volume > 0.1) video.volume -= 0.1;
      break;
    case 'vol+':
      if (video.volume < 0.9) video.volume += 0.1;
      break;
  }
}

const miModal = document.getElementById('videoModal');
miModal.addEventListener('hidden.bs.modal', function () {
  video.pause();
=======
// Este escript solo sirve para que el popovers en la etiqueta a valla
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    trigger: "focus",
  });
>>>>>>> e2b8109469468680ad077108cc891f2b20654da9
});