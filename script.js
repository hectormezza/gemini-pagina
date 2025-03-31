const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const alternarContraste = document.getElementById('alternar-contraste');
const conteudo = document.querySelectorAll('.conteudo');
const body = document.body;

let tamanhoFonte = 16; // Tamanho de fonte padrão

aumentarFonte.addEventListener('click', () => {
    tamanhoFonte += 2;
    conteudo.forEach(section => {
        section.style.fontSize = tamanhoFonte + 'px';
    });
});

diminuirFonte.addEventListener('click', () => {
    tamanhoFonte -= 2;
    conteudo.forEach(section => {
        section.style.fontSize = tamanhoFonte + 'px';
    });
});

alternarContraste.addEventListener('click', () => {
    body.classList.toggle('contraste');
});