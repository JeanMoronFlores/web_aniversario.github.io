// URLs de las canciones y sus nombres
const canciones = [
    { src: 'audios/no_se_decirte_no.mp3', nombre: 'No sé decirte no' },
    { src: 'audios/Hasta_ese_día.mp3', nombre: 'Hasta ese día' },
    { src: 'audios/Cha_cha_chá.mp3', nombre: 'Cha cha chá' },
    { src: 'audios/I_wanna_be_your.mp3', nombre: 'I wanna be yours' },
    { src: 'audios/La_travesia.mp3', nombre: 'La travesia' },
    { src: 'audios/El_amor_de_mi_vida.mp3', nombre: 'El amor de mi vida' }
];

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const muteBtn = document.getElementById('mute');
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');
const nombreAudioElement = document.getElementById('nombreAudio'); // Elemento para mostrar el nombre del audio
let currentIndex = 0;

// Función para cargar una canción por su índice en la lista
function cargarCancion(index) {
    if (index >= 0 && index < canciones.length) {
        audio.src = canciones[index].src;
        audio.load();
        // Actualizar el nombre del audio
        nombreAudioElement.textContent = canciones[index].nombre;
    }
}

// Reproducir o pausar la canción
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Silenciar o des-silenciar la canción
muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
});

// Cambiar a la canción anterior
anteriorBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + canciones.length) % canciones.length;
    cargarCancion(currentIndex);
    audio.play();
});

// Cambiar a la siguiente canción
siguienteBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % canciones.length;
    cargarCancion(currentIndex);
    audio.play();
});

// Cargar la primera canción al cargar la página
cargarCancion(currentIndex);

// Cambiar de canción cuando se termina la actual
audio.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % canciones.length;
    cargarCancion(currentIndex);
    audio.play();
});


