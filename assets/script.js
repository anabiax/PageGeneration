/*

Case Sensitive = reconhece letras maiúsculas e minúsculas

por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementByName()
por classe: getElementsByClassName()
por seletor: querySelector()

*/ 

// variáveis de formulário
let nome = window.document.getElementById("nomecompleto") // acessando o DOM 
let email = document.querySelector("#email") // pelo ID
let telefone = document.querySelector("#telefone") // pelo ID
let mensagem = document.querySelector("#mensagem")

// variáveis de controle de preenchimento
let nomeOk = false
let emailOk = false
let telefoneOk = false
let mensagemOk = false


function validarNome() {
    let txtNome = document.querySelector("#txtNome")  // só serve p/ o escopo desta função
    
    if(nomecompleto.value.length < 3 ) {
        txtNome.innerHTML = "Nome inválido. Digite ao menos 3 (três) caracteres."
        txtNome.style.color = "#C21010"
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome válido."
        txtNome.style.color = "#357C3C"
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido."
        txtEmail.style.color = "#C21010"
        emailOk = false
    } else {
        txtEmail.innerHTML = "Email válido."
        txtEmail.style.color = "#357C3C"
        emailOk = true
    }
}

// validar o padrão de um email na sequência 
function validarEmail2() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.match(regex)){
        txtEmail.innerHTML = 'Email válido.'
        txtEmail.style.color = '#357C3C'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'Email inválido.'
        txtEmail.style.color = '#C21010'
        emailOk = false
    }
}

function validarTelefone() {
    let txtTelefone = document.querySelector("#txtTelefone")
    if (telefone.value.length <= 9 && telefone.value.length > 9) {
        txtTelefone.innerHTML = "Telefone inválido."
        txtTelefone.style.color = "#C21010"
    } else {
        txtTelefone.innerHTML = "Telefone válido."
        txtTelefone.style.color = "#357C3C"
        telefoneOk = true
    }
}

function validarMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")
    if(mensagem.value.length >= 100) {
        txtMensagem.innerHTML = "O texto é muito grande. Digite no máximo 100 caracteres."
        txtMensagem.style.color = "#C21010"
        mensagemOk = false
        // txtMensagem.style.display = "block"    bloquear a div
    } else {
        txtMensagem.innerHTML = mensagem.value.length + "/100"
        txtMensagem.style.color = "#4A314D"
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk === true && emailOk === true && mensagemOk === true ) {
        alert(nome.value + ', sua mensagem foi enviada com sucesso e em breve será respondida :) Fique atento aos seus canais de comunicação.')
    } else {
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}