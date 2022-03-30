// Script por Cel.Lep Tech

var myButtonModal = document.getElementById('myButtonModal')
var myTextModal = document.getElementById('myTextModal')

var inputUsuario = document.getElementById('inputUsuario')
var inputSenha = document.getElementById('inputSenha')

function autenticar(event){
  // interromper o submit
  event.preventDefault()

  // consistencias
  if(inputUsuario.value == 'root' && inputSenha.value == '1234'){
    myTextModal.className = 'text-success'
    myTextModal.innerText = 'Usuário Logado!!!'
  } else {
    myTextModal.className = 'text-danger'
    myTextModal.innerText = 'Usuário ou senha inválida!'
  }

  myButtonModal.click()
}