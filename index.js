'use strict'; // Operando em modo estrito

// Seleciona o botão e adiciona um evento de clique
const switcher = document.querySelector('.btn');

if (switcher) {
switcher.addEventListener('click', () => { 
    document.body.classList.toggle('dark-theme')
    
    const hasDark = document.body.classList.contains('dark-theme'); // Verifica se o corpo tem a classe 'dark-theme'
    switcher.textContent =
        hasDark ? // Se o corpo tem a classe 'dark-theme'
            'Light' : 'Dark'; // Se verdadeiro, mostra 'Light', senão 'Dark'
    
});
}