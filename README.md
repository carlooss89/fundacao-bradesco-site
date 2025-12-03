# *** Fundação Bradesco - Site ***

Este é um projeto simples desenvolvido com HTML, CSS e JavaScript, que permite ao usuário alternar entre o tema claro e o tema escuro através de um botão. O objetivo é treinar manipulação do DOM, criação de temas e aplicação de estilos visuais.

## 📁 *Estrutura do Projeto*
/
├── css/
│   ├── reset.css
│   └── style.css
├── index.html
├── index.js
└── README.md

## 🎯 *Funcionalidades*

- Alternar entre tema claro e tema escuro
- Estilização responsiva utilizando CSS
- Manipulação do DOM com JavaScript
- Uso de classes para mudança de tema
- Layout simples e direto

## 🚀 *Tecnologias Utilizadas*

- HTML5
- CSS3
- JavaScript (ES6+)

## 🛠️ *Como Funciona*

O JavaScript adiciona ou remove uma classe no elemento <body>:

_js_
```document.body.classList.toggle("light-theme");
```

Essa classe altera o visual com base no CSS:

_css_
/* Tema Claro */
```.light-theme {
 background-color: #ffffff;
  color: #000000;
}
```

/* Tema Escuro */
```.dark-theme {
  background-color: #000000;
  color: #00ff00;
}
```
O botão exibe o nome do tema atual _(Light/Dark)_ e atualiza ao ser clicado.

## ▶️ *Como Executar*

1. Baixe ou clone o repositório:
```git clone [https://github.com/carlooss89/fundacao-bradesco-site.git]```
2. Abra a pasta no VS Code.
3. Execute o arquivo index.html em qualquer navegador.
4. Clique no botão para alternar entre os temas.

## 📌 *Melhorias Futuras*
<ul>
<li> Salvar a preferência de tema no localStorage </li>
<li> Adicionar animações de transição de cores </li>
<li> Melhorar a interface com novos estilos </li>
<li> Transformar em um to-do list funcional </li>
</ul>

## 📜 *Licença*

Este projeto é livre para estudo e pode ser modificado como desejar.


