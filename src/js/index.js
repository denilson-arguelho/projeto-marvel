const btnTrailer = document.querySelector(".btn-trailer");
//selecionando a modal que irá aparecer o trailer
const modal = document.querySelector(".modal");
//selecionando o btn que irá fechar a modal
const fecharModal = document.querySelector(".fechar-modal");
//selecionando o video para setar e remover o link do videos
const video = document.getElementById("video");
//salvando o link do video na variavel
const linkVideo = video.src;

btnTrailer.addEventListener("click", () => {
	//adicionando a classe aberto, para aparecer a modal
	modal.classList.add("aberto");
	video.setAttribute("src", linkVideo);
});

fecharModal.addEventListener("click", () => {
	modal.classList.remove("aberto");
	video.setAttribute("src", "");
});
