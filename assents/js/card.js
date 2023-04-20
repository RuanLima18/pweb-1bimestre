let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelNome')
let valiNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let valiUsuario = false

let senha = document.querySelector('#senha')
let labelSenha =document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmsenha')
let labelConfirmSenha =document.querySelector('#labelConfirmSenha')
let validConfirmsenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup',() => {
    if(nome.ariaValueMax.length <= 2){
        labelnome.setAttribute('style','color: red')
        labelnome.innerHTML = 'Nome*Insira no monimo 3 caracteres'
        nome.setAttribute('style','bonder-color: red')
        validNome = false
    }else {
        labelnome.setAttribute('style','color:green')
        labelnome.innerHTML = 'Nome'
        nome.setAttribute('style','border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup',()=>{
    if(usuario.ariaValueMax.length <=4){
        labelUsuario.setAttribute('style','color: red')
        labelUsuario.innerHTML = 'Usuario *insira no minimo 5 caracteres'
        usuario.setAttribute('style','borde-color: red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style','color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style','border-color: green')
        validUsuario = thue
    }
})

senha.addEventListener('kryup',() => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style','color: red')
        labelSenha.innerHTML = 'senha *Insira no minimo 6 ncaracteres'
        senha.setAttribute('style','border-color: red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style','color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style','border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup',() => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style','color:red')
        labelConfirmSenha.innerHTML = 'confirmar Senhas *As senhas não conferem'
        confirmSenha.setAttribute('style','border-color: red')
        validConfirmsenha = false
    }else{
        labelConfirmSenha.setAttribute('style','color; green')
        labelConfirmSenha.innerHTML = 'Cnfirmar Senha'
        confirmSenha.setAttribute('style','border-coloe: green')
        validConfirmsenha = true
    }    
})

function cadastrar(){
    if(valiNome && valiUsuario && validSenha && validConfirmsenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]')

        listaUser.push(
        {
            nomeCard: nome.value,
            card: usuario.value,
            senha: senha.value
        }
        )

        localStorage.setItem('listaUser',JSON.stringify(listaUser))


        msgSuccess.setAttribute('style','display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style','display: none')
        msgError.innerHTML = ''
       
        setTimeout(()=>{
            window.location.href = '../html/signin.html'
        }, 3000)


    }else{
        msgError.setAttribute('style','display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style','display: none')
    }
}

btn.addEventListener('Click',()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else{
        inputSenha.setAttribute(type, 'password')
    }
})

btnConfirm.addEventListener('Click', ()=>{
    let inputConfimSenha = document.querySelector('#confirmSenha')

    if(inputConfimSenha.getAttribute('type')=='password'){
        inputConfimSenha.setAttribute('type','text')
    }else{
        inputConfimSenha.setAttribute('type','password')
    }
})
