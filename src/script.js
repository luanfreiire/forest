// App Forest// 

//Menu Mobile//
const btn_mobile = document.getElementById("btn_mobile");
const menu_mobile = document.getElementById("menu_mobile");

// Abrir Menu Mobile //
btn_mobile.addEventListener('click', () => {
    menu_mobile.classList.toggle("hidden");
    menu_mobile.classList.toggle("flex");       
});

// Fechar Menu Mobile //
menu_mobile.addEventListener('click', () => {
    menu_mobile.classList.add("hidden");
    menu_mobile.classList.remove("flex");
});

// Dia, Temperatura e Precipitação //
const dia = document.getElementById("dia");
const temperatura = document.getElementById("temperatura");
const tempo = document.getElementById("tempo");

const random = Math.floor(Math.random() * 10) + 20;
temperatura.innerHTML = `${random}°`;
tempo.innerHTML = random < 25 ? `🌧️ ${random + 5}% ` : `🌤️`;

const date = new Date();
dia.innerHTML = date.toLocaleDateString('pt-BR', {
    weekday: 'long',
})
.replace('-feira', '');

//Video//
const video = document.getElementById("video");
video.src = random < 25 ? `./img/video_chuva.mp4` : `./img/video_sol.mp4`;