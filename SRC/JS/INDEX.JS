/*

OBJETIVO 1 - quando o usário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuário clicar no X dvemos fechar a modal


OBJETIVO 1 - quando o usário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemnto de fechar modal usando js
    - passo 2 - dar um jeito de identificar quando o usário clicar no X
    - passo 3 - fechar a modal

*/

// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer")

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
// passo 4 - abrir a modal na tela ;
modal.classList.add("aberto");
video.setAttribute("src", linkDoVideo);
});

// passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");

// OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
// passo 1 - dar um jeito de pegar o elemnto de fechar modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal")

// passo 2 - dar um jeito de identificar quando o usário clicar no X
botaoFecharModal.addEventListener("click", () => {
// passo 3 - fechar a modal
modal.classList.remove("aberto");
video.setAttribute("src", "");    
})

const video = document.getElementById("video");
const linkDoVideo = video.src;