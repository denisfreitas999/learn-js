//window.alert("Olá mundo!"); //Abre uma janela de alerta o navegador!

//window.console.log("Eu sou o console") // A mensagem é apresentada no console, f12 modo de desenvolvedor

//window.document.getElementById("titulo")

//window.console.log(window.document.getElementById("titulo")) // informa o elemento buscando pelo Id

//console.log(window.document.getElementById("titulo").innerHTML) // informa somente o texto sem as tags html

//console.log(screen.width)
   
//console.log(window)

// A partir do window.document são manipulados os elementos HTML, o window pode ser omitido pois ele é o objeto principal, ou seja, todos os outros estão dentro dele.

// BOM (BROWSER OBJECT MODEL) - Abriga todos os objetos da familia window inclusive ele mesmo
// DOM (DOCUMENT OBJECT MODEL) - Objeto que engloba os objetos e métodos de modificação no documento HTML.

console.log(screen)
console.log(navigator)
console.log(location)
console.log(history)

function voltar() {
    history.back()
}

function adiantar(){
    history.forward()
}