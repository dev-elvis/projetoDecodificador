let textarea = document.getElementById("texto");
let criptografar = document.getElementById("criptografar");
let descriptografar = document.getElementById("descriptografar");
let resultado = document.getElementById("resultadoP");
let semMensagem = document.querySelector(".semMensagem");
let criptoMensagem = document.querySelector(".criptoMensagem");
let aviso = document.querySelector(".aviso");
let buttonCopiar = document.getElementById("buttonCopiar");
let svg = document.getElementById('meuSvg');
let path = svg.querySelector('path');

criptografar.addEventListener("click", function() {
    // Obtendo o valor do campo textarea.
    let mensagem = textarea.value;

    // Verificando se o campo contém letras maiúsculas, acentos e números.
    if (!/^[a-z\s]*$/.test(textarea.value)) {
        // Exibindo a mensagem de erro se caracteres inválidos forem encontrados
        aviso.classList.add("error");
        path.setAttribute('fill', 'red');
        resultado.textContent ='';
        buttonCopiar.classList.add("notvisible");
      } else {
        // Ocultando a mensagem de erro se a entrada for válida
        aviso.classList.remove("error");
        path.setAttribute('fill', '#495057');
        buttonCopiar.classList.remove("notvisible");

        // Criptografando a mensagem.
        let mensagemCriptografada = mensagem.replace(/e/g, "enter").replace(/i/g, "imes")
        .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        // Atribuindo valor ao elemento P.
        resultado.textContent = mensagemCriptografada;

        // Limpando o campo do textarea após clicar no botão descriptografar.
        textarea.value ='';
        imagemDisplay();
      }
    });

descriptografar.addEventListener("click", function() {
    //Obtendo o valor do campo textarea.
    let mensagem = textarea.value;

    // Criptografando a mensagem.
    let mensagemCriptografada = mensagem.replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    // Atribuindo valor ao elemento P.
    resultado.textContent = mensagemCriptografada;

    // Limpando o campo do textarea após clicar no botão descriptografar.
    textarea.value ='';
    imagemDisplay();
});

let imgnotmessage = document.getElementById("imgnotmessage");

function imagemDisplay() {
    if (resultado.textContent.trim().length > 0) {
        imgnotmessage.classList.add("notvisible");  
        semMensagem.classList.add("notvisible");
        criptoMensagem.classList.add("notvisible");
        buttonCopiar.classList.remove("notvisible");
    
    } else if (textarea.value.trim() === "" || textarea.includes(' ')) {
        imgnotmessage.classList.remove("notvisible");
        semMensagem.classList.remove("notvisible");
        criptoMensagem.classList.remove("notvisible");
        buttonCopiar.classList.add("notvisible");
    } 
}

function copiarTexto() {
    let copiarTexto = document.getElementById('resultadoP').innerText;
    
    // Usa a API Clipboard para copiar o texto para a área de transferência
    navigator.clipboard.writeText(copiarTexto)

    alert('O texto foi copiado para a área de transferência!');
};


